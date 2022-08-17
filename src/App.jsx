import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    saveCards: [],
  };

  handleButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const numAttr1 = Number(cardAttr1);
    const numAttr2 = Number(cardAttr2);
    const numAttr3 = Number(cardAttr3);

    const validateForm = cardName.length > 0
      && cardDescription.length > 0
      && cardAttr1.length > 0
      && cardAttr2.length > 0
      && cardAttr3.length > 0
      && cardImage.length > 0;

    const attrMaxValue = 90;
    const attrMinValue = 0;

    const attrs = cardAttr1 >= attrMinValue && cardAttr1 <= attrMaxValue
      && cardAttr2 >= attrMinValue && cardAttr2 <= attrMaxValue
      && cardAttr3 >= attrMinValue && cardAttr3 <= attrMaxValue;

    const sumLimit = 210;
    const attrsSumValid = numAttr1 + numAttr2 + numAttr3 <= sumLimit;

    const all = validateForm && attrs && attrsSumValid;

    this.setState({
      isSaveButtonDisabled: !all,
    });
  }

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    }, () => {
      this.handleButtonDisabled();
    });
  }

  trunfoCard = () => {
    const { saveCards } = this.state;
    const hasTrunfo = saveCards.some(({ cardTrunfo }) => cardTrunfo);
    this.setState({ hasTrunfo });
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    this.setState((currentState) => ({
      saveCards: [...currentState.saveCards, currentState],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }), this.trunfoCard);
  }

  deleteCard(key) {
    const {
      saveCards,
    } = this.state;
    this.setState(
      {
        saveCards: saveCards.filter((card, index) => index !== key),
      }, () => {
        this.trunfoCard();
      },
    );
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      saveCards,
    } = this.state;

    return (
      <main>
        <section>
          <h1 id="head">Tryunfo</h1>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ (this.onSaveButtonClick) }
          />
        </section>
        <section>
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
          { saveCards.length > 0 && saveCards.map((item, index) => (
            <div key={ index }>
              <Card
                key={ index }
                cardName={ item.cardName }
                cardDescription={ item.cardDescription }
                cardAttr1={ item.cardAttr1 }
                cardAttr2={ item.cardAttr2 }
                cardAttr3={ item.cardAttr3 }
                cardImage={ item.cardImage }
                cardRare={ item.cardRare }
                cardTrunfo={ item.cardTrunfo }
              />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => {
                  this.deleteCard(index);
                } }
              >
                Excluir
              </button>
            </div>
          ))}
        </section>

        <Filter />
      </main>
    );
  }
}

export default App;

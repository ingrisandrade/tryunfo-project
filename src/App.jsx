import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
// import Filter from './components/Filter';

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
    filterCards: [],
    filterName: '',
    filterRarity: '',
    disabled: false,
  };

  handleButtonDisabled = () => {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage,
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

  onSaveButtonClick = (e) => {
    e.preventDefault();

    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
    } = this.state;

    const {
      saveCards,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState(
      {
        saveCards: [...saveCards, card],
      }, () => {
        this.setState({
          cardName: '',
          cardDescription: '',
          cardAttr1: '0',
          cardAttr2: '0',
          cardAttr3: '0',
          cardImage: '',
          cardRare: 'normal',
          cardTrunfo: false,
          isSaveButtonDisabled: true,
        });
        this.hasTrunfo();
      },
    );
  };

  hasTrunfo = () => {
    const { saveCards } = this.state;
    const hasTrunfo = saveCards.some((card) => card.cardTrunfo);
    this.setState({ hasTrunfo });
  };

  deleteCard = (key) => {
    const {
      saveCards, filterCards,
    } = this.state;
    this.setState(
      {
        saveCards: saveCards.filter((card, index) => index !== key),
        filterCards: filterCards.filter((card, index) => index !== key),
      }, () => {
        this.hasTrunfo();
      },
    );
  };

  filterRarity = ({ target }) => {
    if (target.value === 'todas') return this.setState({ filterRarity: '' });
    if (target.value === 'normal') return this.setState({ filterRarity: 'normal' });
    if (target.value === 'raro') return this.setState({ filterRarity: 'raro' });
    if (target.value === 'muito raro') {
      return this.setState({ filterRarity: 'muito raro' });
    }
  }

  filterName = ({ target }) => {
    // const { filterCards, filterName } = this.state;
    this.setState({
      filterName: target.value,
    });
    // const CardsNames = filterCards.filter((card) => card.cardName.includes(filterName));
    // this.setState({ filterCards: CardsNames });
  }

  // filterSuperTrunfo = ({ target }) => {
  //   const { filterCards } = this.state;
  //   const filterTrunfo = filterCards.filter((card) => card.cardTrunfo);
  //   const value = target.checked;
  //   this.setState({
  //     filterCards: filterTrunfo,
  //     filterDisable: value,
  //   });
  // };

  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      saveCards, filterName, disabled, filterRarity,
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
            onSaveButtonClick={ this.onSaveButtonClick }
            filterName={ this.filterName }
            disabled={ disabled }
            filterRarity={ this.filterRarity }
          />

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

          {/* <Filter
            onfilterRarity={ this.filterRarity }
            onfilterName={ this.filterName }
            onfilterTrunfo={ this.filterSuperTrunfo }
            disabled={ filterDisable }
            filterCards={ filterCards }
          /> */}

          <section>
            <h3>Salvar Cartas</h3>
            {saveCards
              .filter((card) => card.cardRare.startsWith(filterRarity))
              .filter((card) => card.cardName.includes(filterName)).map((card, index) => (
                <div key={ index }>
                  <Card
                    cardName={ card.cardName }
                    cardDescription={ card.cardDescription }
                    cardAttr1={ card.cardAttr1 }
                    cardAttr2={ card.cardAttr2 }
                    cardAttr3={ card.cardAttr3 }
                    cardImage={ card.cardImage }
                    cardRare={ card.cardRare }
                    cardTrunfo={ card.cardTrunfo }
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
        </section>
      </main>
    );
  }
}

// Requisito 10 e 11 feito com ajuda de Pedro H. Niemczewski

export default App;

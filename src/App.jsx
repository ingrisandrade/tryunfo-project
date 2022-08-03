import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: 'false', /* boolean */
    // hasTrunfo, /* boolean */
    isSaveButtonDisabled: 'true', /* boolean */
  }

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    },
    () => {
      this.validateForm();
    });
  }

  validateForm = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const valueAttr = 210;
    const attrValue = 90;

    const validAll = [
      cardName.length > 0,
      cardDescription.length > 0,
      cardImage.length > 0,
      cardRare.length > 0,
      parseInt(cardAttr1, 10) <= attrValue,
      parseInt(cardAttr2, 10) <= attrValue,
      parseInt(cardAttr3, 10) <= attrValue,
      parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10) <= valueAttr,
      parseInt(cardAttr1, 10) >= 0,
      parseInt(cardAttr2, 10) >= 0,
      parseInt(cardAttr3, 10) >= 0,
    ].every(Boolean);

    this.setState({
      isSaveButtonDisabled: !validAll,
    });
  }

  onSaveButtonClick = () => { };

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
      // hasTrunfo, /* Não foi pedido no requisito */
      isSaveButtonDisabled,
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
        </section>
      </main>
    );
  }
}

export default App;

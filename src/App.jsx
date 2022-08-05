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
    cardTrunfo: '', /* boolean */
    // hasTrunfo, /* boolean */
    isSaveButtonDisabled: 'true', /* boolean */
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

  onSaveButtonClick = () => {
    console.log('Ainda não implementado');
  };

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

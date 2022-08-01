import React from 'react';
import Form from './components/Form';

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
    // isSaveButtonDisabled: '', /* boolean */
  }

  onInputChange = () => {
    console.log('callback onInputChange');
  }

  onSaveButtonClick = () => {
    console.log('callback onSaveButtonClick');
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
      // hasTrunfo, /* Não foi pedido no requisito */
      // isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
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
        />
      </div>
    );
  }
}

export default App;

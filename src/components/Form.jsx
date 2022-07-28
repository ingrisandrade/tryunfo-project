import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      onInputChange,
      onSaveButtonClick
    } = this.props;
    return (
      <div>
        <label htmlFor="name-input">
          <input type="text" data-testid="name-input" name="name-input" />
        </label>
        <label htmlFor="description-input">
          <textarea
            name="description-input"
            id=""
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          <input type="number" name="attr1-input" id="" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2-input">
          <input type="number" name="attr2-input" id="" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3-input">
          <input type="number" name="attr3-input" id="" data-testid="attr3-input" />
        </label>
        <label htmlFor="image-input">
          <input type="text" name="image-input" data-testid="image-input" />
        </label>
        <select name="" id="" data-testid="rare-input">
          <option value="normal"> normal </option>
          <option value="raro"> raro </option>
          <option value="muito raro"> muito raro </option>
        </select>
        <label htmlFor="super-tryunfo">
          <input type="checkbox" name="super-tryunfo" id="" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.boolean.isRequired,
  hasTrunfo: PropTypes.boolean.isRequired,
  isSaveButtonDisabled: PropTypes.boolean.isRequired,
  onInputChange: PropTypes.callback.isRequired,
  onSaveButtonClick: PropTypes.callback.isRequired,
};

export default Form;

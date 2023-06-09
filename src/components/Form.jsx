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
      onSaveButtonClick,
      filterName,
      disabled,
      filterRarity,
    } = this.props;
    return (
      <section>
        <form action="">
          <label htmlFor="name-input">
            Nome
            <br />
            <input
              type="text"
              data-testid="name-input"
              name="cardName"
              id="name-input"
              placeholder="Digite o nome da carta"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />
          <label htmlFor="description-input">
            Descrição
            <br />
            <textarea
              name="cardDescription"
              id=""
              cols="30"
              rows="10"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr1-input">
            Attr01
            <input
              type="number"
              name="cardAttr1"
              id=""
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr2-input">
            Attr02
            <input
              type="number"
              name="cardAttr2"
              id=""
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr3-input">
            Attr03
            <input
              type="number"
              name="cardAttr3"
              id=""
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />
          <label htmlFor="image-input">
            Imagem
            <input
              type="text"
              name="cardImage"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />
          Raridade
          <select
            name="cardRare"
            id=""
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal"> normal </option>
            <option value="raro"> raro </option>
            <option value="muito raro"> muito raro </option>
          </select>
          <br />
          <br />
          { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : (
            <label htmlFor="trunfo-input">
              <input
                type="checkbox"
                name="cardTrunfo"
                id="trunfo-input"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              Super Trybe Trunfo
            </label>
          )}
          <br />
          <br />
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>

          <h2>Filtros de carta:</h2>

          <label htmlFor="filterName">
            Lista de Cartas Filtradas
            <input
              type="text"
              name="filterName"
              id="filterName"
              placeholder="Digite o nome da carta"
              data-testid="name-filter"
              onChange={ filterName }
              disabled={ disabled }
            />
          </label>

          <select
            name="filterRarity"
            id="filterRarity"
            data-testid="rare-filter"
            disabled={ disabled }
            onChange={ filterRarity }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>

        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
  filterName: PropTypes.func,
  filterRarity: PropTypes.func,
}.isRequired;

export default Form;

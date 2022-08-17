import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filterName, filterRarity, filterSuperTrunfo, disabled } = this.props;

    return (
      <div>
        <h2>Filtros de carta:</h2>
        <label htmlFor="filter-name">
          Lista de Cartas Filtradas
          <input
            type="text"
            name="filter-name"
            id="filter-name"
            placeholder="Digite o nome da carta"
            data-testid="name-filter"
            onChange={ filterName }
            disabled={ disabled }
          />
        </label>

        <select
          name="filter-rarity"
          id="filter-rarity"
          data-testid="rare-filter"
          disabled={ disabled }
          onChange={ filterRarity }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>

        <label htmlFor="trunfo-filter">
          <input
            type="checkbox"
            name="trunfo-filter"
            id="trunfo-filter"
            data-testid="trunfo-filter"
            onChange={ filterSuperTrunfo }
          />
          Super Trunfo
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filterName: PropTypes.func,
  filterRarity: PropTypes.func,
  filterSuperTrunfo: PropTypes.func,
  disabled: PropTypes.bool,
}.isRequired;

export default Filter;

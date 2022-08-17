import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filterName, filterRarity, filterSuperTrunfo, disabled } = this.props;

    return (
      <div>
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
      </div>
    );
  }
}

Filter.propTypes = {
  filterByName: PropTypes.func,
}.isRequired;

export default Filter;

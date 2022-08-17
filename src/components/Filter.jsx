import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div>
        <label htmlFor="filter-name">
          Lista de Cartas Filtradas
          <input
            type="text"
            name="filter "
            id="filter-name"
            placeholder="Digite o nome da carta"
            data-testid="name-filter"
          />
        </label>
      </div>
    );
  }
}

export default Filter;

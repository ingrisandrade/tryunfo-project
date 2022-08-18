// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Card from './Card';

// class Filter extends Component {
//   render() {
//     const {
//       filterName,
//       onFilterRarity,
//       onFilterTrunfo,
//       disabled,
//       filterCards,
//     } = this.props;

//     return (
//       <div>
//         <h2>Filtros de carta:</h2>

//         <label htmlFor="filterName">
//           Lista de Cartas Filtradas
//           <input
//             type="text"
//             name="filterName"
//             id="filterName"
//             placeholder="Digite o nome da carta"
//             data-testid="name-filter"
//             onChange={ filterName }
//             disabled={ disabled }
//           />
//         </label>

//         <select
//           name="filter-rarity"
//           id="filter-rarity"
//           data-testid="rare-filter"
//           disabled={ disabled }
//           onChange={ onFilterRarity }
//         >
//           <option value="todas">Todas</option>
//           <option value="normal">Normal</option>
//           <option value="raro">Raro</option>
//           <option value="muito raro">Muito Raro</option>
//         </select>

//         <label htmlFor="filter-trunfo">
//           <input
//             type="checkbox"
//             name="filter-trunfo"
//             id="filter-trunfo"
//             data-testid="trunfo-filter"
//             onChange={ onFilterTrunfo }
//           />
//           Super Trunfo
//         </label>
//         <div>
//           {
//             filterCards.filter((card) => card.cardName.includes(onFilterName)).map((e) => (
//               <div key={ e.cardName }>
//                 <Card
//                   cardName={ e.cardName }
//                   cardDescription={ e.cardDescription }
//                   cardAttr1={ e.cardAttr1 }
//                   cardAttr2={ e.cardAttr2 }
//                   cardAttr3={ e.cardAttr3 }
//                   cardImage={ e.cardImage }
//                   cardRare={ e.cardRare }
//                   cardTrunfo={ e.cardTrunfo }
//                 />
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     );
//   }
// }

// Filter.propTypes = {
//   filterName: PropTypes.func,
//   onFilterRarity: PropTypes.func,
//   onFilterTrunfo: PropTypes.func,
//   disabled: PropTypes.bool,
//   filterCards: PropTypes.array,
// }.isRequired;

// export default Filter;

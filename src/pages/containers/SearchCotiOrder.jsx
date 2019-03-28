import React, { Component } from 'react';
import '../css/searchcotiorder.css';

/*Combobox maestro*/
class SearchCotiOrder extends Component {
  render() {
    return (
      <div className="SearchCotiOrder">
        <p>Documento:</p>
        <select
        onChange={this.props.handleOptions.bind(this)}>
        <option value="Cotización">Cotización</option>
        <option value="Orden de Compra">Orden de Compra</option>
        </select>
        <input className="SearchCotiOrder-input" type="text" placeholder={`Id de la ${this.props.placeholder}`}/>
        <button className="SearchCotiOrder-button">Buscar</button>
      </div>
    );
  }
}

export default SearchCotiOrder;

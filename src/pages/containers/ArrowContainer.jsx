import React, { Component } from 'react';
import '../css/arrowcontainer.css';

/*Manejador de botones para interactuar con los detalles de producto*/
class ArrowContainer extends Component {
  render() {
    return (
      <div className="ArrowContainer">
        <div>Añadir</div>
        <div>Quitar</div>
      </div>
    );
  }
}

export default ArrowContainer;

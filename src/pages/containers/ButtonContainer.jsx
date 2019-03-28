import React, { Component } from 'react';
import '../css/button-container.css';

/*Botones maestros para permitir al usuario verificar sus cambios y ejecutarlos*/
class ButtonsContainer extends Component {
  render() {
    return (
      <div className="Button-container">
        <button>Ver Actual</button>
        <button>Modificar</button>
        <button>Ver Nuevo</button>
      </div>
    );
  }
}

export default ButtonsContainer;

import React, { Component } from 'react';
import '../css/button-container.css';

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

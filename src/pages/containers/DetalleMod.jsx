import React, { Component } from 'react';
import '../css/detallemod.css';

/*Vista detallada de los productos*/
class DetalleMod extends Component {
  render() {
    return (
      <div className="DetalleMod">
        <div className="detalleMod-titles">
          <h1>Producto</h1>
          <h1>Cantidad</h1>
          <h1>Precio</h1>
        </div>
        <div className="detalleMod-detail-container">
          <div className="detalleMod-detail">
            <p></p>
          </div>
          <div className="detalleMod-detail">
            <p></p>
          </div>
          <div className="detalleMod-detail">
            <p></p>
          </div>
          <div className="detalleMod-detail">
            <p></p>
          </div>
          <div className="detalleMod-detail">
            <p></p>
          </div>
          <div className="detalleMod-detail">
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default DetalleMod;

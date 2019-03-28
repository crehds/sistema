import React from 'react';

/*Opciones Generales que se repiten en la vista anterior del Documento
 y luego de modificar el mismo*/
function ModificarOptions(props) {
  return (
    <div className="modificaroptions-container">
      <div className="modificar-detail">
        <p>Número documento</p>
        <input type="text" ref={props.setInputRef} ref={props.setInputRef}/>
      </div>
      <div className="modificar-detail">
        <p>Tipo de documento</p>
        <input type="text" ref={props.setInputRef}/>
        </div>
      <div className="modificar-detail">
        <p>Destinatario</p>
        <input type="text" ref={props.setInputRef}/>
      </div>
      <div className="modificar-detail">
        <p>Contacto</p>
        <input type="text" ref={props.setInputRef}/>
      </div>
      <div className="modificar-detail">
        <p>Email</p>
        <input type="text" ref={props.setInputRef}/>
      </div>
      <div className="modificar-detail">
        <p>R.U.T</p>
        <input type="text" ref={props.setInputRef}/>
      </div>
    </div>
  );
}

export default ModificarOptions;

import React from 'react';

function ModificarOptions(props) {
  return (
    <div className="modificaroptions-container">
      <div className="modificar-detail">
        <p>Numero Documento</p>
        <input type="text" ref={props.setInputRef} ref={props.setInputRef}/>
      </div>
      <div className="modificar-detail">
        <p>TipoDocumento</p>
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

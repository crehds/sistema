import React from 'react';

import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';
import Input from '../../reusables/components/Input.jsx';
import Button from '../../reusables/components/Button.jsx';

import '../css/formulario.css';

/*Componente independiente del logo*/
/*Contiene los inputs para ingresar los datos del usuario*/
export default function Formulario(props) {
  return (
    <form className="Formulario" onSubmit={props.authentication}>
    {/*Usuario*/}
      <LayoutDiv>
        <p>Usuario</p>
        <Input
          type="text"
          class="formulario-input"
          inputRef={props.setInputRef}
        />
      </LayoutDiv>
      {/*Contraseña*/}
      <LayoutDiv>
        <p>Contraseña</p>
        <Input
          type="password"
          class="formulario-input"
          inputRef={props.setInputRef}
        />
      </LayoutDiv>
      {/*Login-button*/}
      <Button
        class="formulario-button"
        text="Login"
      />
    </form>
  );
}

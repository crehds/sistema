import React from 'react';

import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';
import Input from '../../reusables/components/Input.jsx';
import Button from '../../reusables/components/Button.jsx';

import '../css/formulario.css';

export default function Formulario(props) {
  return (
    <form className="Formulario" onSubmit={props.authentication}>
      <LayoutDiv>
        <p>Usuario</p>
        <Input
          type="text"
          class="formulario-input"
          inputRef={props.setInputRef}
        />
      </LayoutDiv>
      <LayoutDiv>
        <p>Contraseña</p>
        <Input
          type="password"
          class="formulario-input"
          inputRef={props.setInputRef}
        />
      </LayoutDiv>
      <Button
        class="formulario-button"
        text="Login"
      />
    </form>
  );
}

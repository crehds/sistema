import React from 'react';

import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';
import Input from '../../reusables/components/Input.jsx';

import '../css/formulario.css';

export default function Formulario(props) {
  return (
    <LayoutDiv class="Formulario">
      <LayoutDiv>
        <p>Usuario</p>
        <Input
          type="text"
          class="formulario-input"
        />
      </LayoutDiv>
      <LayoutDiv>
        <p>Contraseña</p>
        <Input
          type="text"
          class="formulario-input"
        />
      </LayoutDiv>
    </LayoutDiv>
  );
}

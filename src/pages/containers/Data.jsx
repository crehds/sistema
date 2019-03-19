import React, { Component } from 'react';

import LayoutSection from '../../reusables/components/LayoutSection.jsx';
import UserBar from '../../navigators/containers/UserBar.jsx';

import '../css/data.css';

class Data extends Component {
  /*Faltan agregar las pages para mostrar contenido en el área en blanco
    entre los navegadores
  */
  render() {
    return (
      <LayoutSection
        class="Data"
      >
        <UserBar/>
      </LayoutSection>
    );
  }

}

export default Data;

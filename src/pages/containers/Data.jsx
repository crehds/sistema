import React, { Component } from 'react';

import LayoutSection from '../../reusables/components/LayoutSection.jsx';
import UserBar from '../../navigators/containers/UserBar.jsx';

import '../css/data.css';

class Data extends Component {
  /*Faltan agregar las pages para mostrar contenido en el área en blanco
    entre los navegadores
  */
  render() {
    var {
      userBar,
    } = this.props.data;
    return (
      <LayoutSection
        class={this.props.data.class}
      >
        {console.log(userBar)}
        <UserBar
          class={userBar.class}
          image={userBar.image}
          search={userBar.search}
          notification={userBar.notification}
          userData={userBar.userData}
        />
      </LayoutSection>
    );
  }

}

export default Data;

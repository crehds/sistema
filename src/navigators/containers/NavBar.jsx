import React, { Component } from 'react';

import LayoutSection from '../../reusables/components/LayoutSection.jsx';
import Button from '../../reusables/components/Button.jsx';

import IconNavBar from '../components/IconNavBar.jsx';

import '../css/navbar.css';
import '../css/iconnavbar.css';

class NavBar extends Component {

  /*Se guarda la referencia para poder manipular el ancho del NavBar*/
  setNavRef = element => (
    this.div = element
  );

  /*Manejador de estilos*/
  /*Añadirá la clase is-active al hacer click*/
  handleAddClass = () => {
    if (this.div.classList.contains('is-active')) {
      this.div.classList.remove('is-active');
    } else {
      this.div.classList.add('is-active');
    }
  };

  /*Manejará que estado enviar al manejador de la data del component Home*/
  handleContent= (event) => {
    this.props.handleData(event.target.id.slice(2));
  };

  render() {
    return (
      <LayoutSection
        class="NavBar"
        secRef={this.setNavRef}
      >
        <IconNavBar
          aOption="i-navbar"
          iClass="icon-menu burguer-menu"
          handleAddClass={this.handleAddClass}
        />
        <IconNavBar
          name="Home"
          aOption="i-navbar-home"
          iClass="icon-home"
          handleContent={this.handleContent}
        />
        <IconNavBar
          name="Emitir"
          aOption="i-navbar-home"
          iClass="icon-document-add"
          handleContent={this.handleContent}
        />
        <IconNavBar
          name="Modificar"
          aOption="i-navbar-home"
          iClass="icon-inbox-document"
          handleContent={this.handleContent}
        />
      </LayoutSection>
    );
  }

}

export default NavBar;

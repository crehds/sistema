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
  handleContent= (event) => (
    this.props.handleData(event.target.id.slice(2))
  );

  render() {
    var {
      navBar,
    } = this.props;
    return (
      <LayoutSection
        class={navBar.class}
        secRef={this.setNavRef}
      >
      {navBar.icons.map((e, i) => {
        if (i == 0) {
          /*Se renderiza el burguer menu*/
          return (<IconNavBar
                    key={e.id}
                    aOption={e.option}
                    iClass={e.icon}
                    handleAddClass={this.handleAddClass}
                  />);
        }
        /*se renderiza el resto de íconos*/
        return (<IconNavBar
                  key={e.id}
                  aOption={e.option}
                  iClass={e.icon}
                  name={e.name}
                  handleContent={this.handleContent}
               />);
      })}
      </LayoutSection>
    );
  }

}

export default NavBar;

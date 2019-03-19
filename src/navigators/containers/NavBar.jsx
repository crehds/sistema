import React, { Component } from 'react';

import LayoutSection from '../../reusables/components/LayoutSection.jsx';
import Button from '../../reusables/components/Button.jsx';

import IconNavBar from '../components/IconNavBar.jsx';

import '../css/NavBar.css';
import '../css/iconnavbar.css';

class NavBar extends Component {

  setNavRef = element => (
    this.div = element
  );

  handleAddClass = () => {
    if (this.div.classList.contains('is-active')) {
      this.div.classList.remove('is-active');
    } else {
      this.div.classList.add('is-active');
    }
  };

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
          aOption="button"
          iClass="icon-menu burguer-menu"
          handleAddClass={this.handleAddClass}
        />
        <IconNavBar
          name="Home"
          aOption="button-home"
          iClass="icon-home"
          handleContent={this.handleContent}
        />
        <IconNavBar
          name="Emitir"
          aOption="button-home"
          iClass="icon-document-add"
          handleContent={this.handleContent}
        />
        <IconNavBar
          name="Modificar"
          aOption="button-home"
          iClass="icon-inbox-document"
          handleContent={this.handleContent}
        />
      </LayoutSection>
    );
  }

}

export default NavBar;

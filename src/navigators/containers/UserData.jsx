import React, { Component } from 'react';

import Icon from '../../reusables/components/Icon.jsx';
import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';

import '../css/userdata.css';

class UserData extends Component {

  state = {
    isOpen: false,
  };

  setArrowRef = element => (
    this.i = element
  );

  handleArrow = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <LayoutDiv class="UserData">
        <Icon
          class="icon-user image"
        />
        <div>Alonso</div>
        <div>Administrador</div>
        <Icon
          class="icon-keyboard_arrow_down arrow"
          setArrowRef={this.setArrowRef}
          handleArrow={this.handleArrow}
        />
        {this.state.isOpen &&
          <LayoutDiv class="login">
            <p>Cambiar de usuario</p>
            <p>Desloguearse</p>
          </LayoutDiv>
        }
      </LayoutDiv>
    );
  }
}

export default UserData;

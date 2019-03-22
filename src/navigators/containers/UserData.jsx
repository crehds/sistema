import React, { Component } from 'react';

import Icon from '../../reusables/components/Icon.jsx';
import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';
import Settings from '../components/Settings.jsx';

import '../css/userdata.css';

class UserData extends Component {

  state = {
    isOpen: false,
  };

  setArrowRef = element => (
    this.i = element
  );

  /*Abre y cierra el cuadro de diálogo para desloguearse.
    Funcionalidad no implementada
  */
  handleArrow = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    var { settings } = this.props.userData;
    var { functionsSettings} = this.props;
    return (
      <LayoutDiv class={this.props.userData.class}>
        <Icon
          class="icon-user image"
        />
        <div>Claudia</div>
        <div>Administradora</div>
        <Icon
          class="icon-keyboard_arrow_down arrow"
          setIRef={this.setArrowRef}
          function={this.handleArrow}
        />
        {this.state.isOpen &&
          <Settings
            class={settings.class}
            content={settings.content}
            functionsSettings={functionsSettings}
          />
        }
      </LayoutDiv>
    );
  }
}

export default UserData;

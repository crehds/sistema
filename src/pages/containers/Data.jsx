import React, { Component } from 'react';

import LayoutSection from '../../reusables/components/LayoutSection.jsx';
import UserBar from '../../navigators/containers/UserBar.jsx';
import Emitir from './Emitir.jsx';

import '../css/data.css';

class Data extends Component {

  state = {
    content: this.props.state,
    empresa: this.props.empresa,
    usuario: this.props.usuario,
  };

  /*Manejador de contenido*/
  handleContent = (state) => {
    switch (state) {
      case 'Emitir':
        var { emitir } = this.props.data;
        return (<Emitir
                  emitir={emitir}
                  empresa={this.state.empresa}
                  usuario={this.state.usuario}
                />);
      case 'Modificar':
        var { modificar } = this.props.data;
        return (<Modificar
                  modificar={modificar}
                  empresa={this.state.empresa}
                  usuario={this.state.usuario}
                />);
    }
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.state !== this.props.state) {
      this.setState({
        content: nextProps.state,
      });
    }
  }

  render() {
    var {
      userBar,
    } = this.props.data;
    return (
      <LayoutSection
        class={this.props.data.class}
      >
        <UserBar
          class={userBar.class}
          image={userBar.image}
          search={userBar.search}
          notification={userBar.notification}
          userData={userBar.userData}
        />
        {this.handleContent(this.state.content)}
      </LayoutSection>
    );
  }

}

export default Data;

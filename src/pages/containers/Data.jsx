import React, { Component } from 'react';

import UserBar from '../../navigators/containers/UserBar.jsx';
import Emitir from './Emitir.jsx';
import Modificar from './Modificar.jsx';

import LayoutSection from '../../reusables/components/LayoutSection.jsx';

import '../css/data.css';
import '../css/border-feedback.css';

/*Componente independiente que modifica su contenido dependiendo
del icono seleccionado en el navBar*/
class Data extends Component {

  state = {
    content: this.props.state,
    empresa: this.props.empresa,
    usuario: this.props.usuario,
    functionsSettings: [
      this.props.showProfile,
      this.props.unloggin,
    ],
  };

  /*Manejador de contenido*/
  handleContent = (state) => {
    var { handleBorderFeedBack } = this.props;
    switch (state) {
      case 'Emitir':
        var { emitir } = this.props.data;
        return (<Emitir
                  emitir={emitir}
                  empresa={this.state.empresa}
                  usuario={this.state.usuario}
                  handleBorderFeedBack={handleBorderFeedBack}
                />);
      case 'Modificar':
        var { modificar } = this.props.data;
        return (<Modificar
                  modificar={modificar}
                  empresa={this.state.empresa}
                  usuario={this.state.usuario}
                  handleBorderFeedBack={handleBorderFeedBack}
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
    var { userBar } = this.props.data;
    var { functionsSettings } = this.state;
    return (
      <LayoutSection
        class={this.props.data.class}
      >
        {/*Barra con las opciones del Usuario.
          Este componente se visualiza de manera global al
          ingresar al Home*/}
        <UserBar
          class={userBar.class}
          image={userBar.image}
          search={userBar.search}
          notification={userBar.notification}
          userData={userBar.userData}
          functionsSettings={functionsSettings}
        />
        {/*Manejador de contenido(Data)*/}
        {this.handleContent(this.state.content)}
      </LayoutSection>
    );
  }

}

export default Data;

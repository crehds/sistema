import React, { Component } from 'react';

import LayoutSection from '../../reusables/components/LayoutSection.jsx';

import NavBar from '../../navigators/containers/NavBar.jsx';
import Data from './Data.jsx';

import '../css/home.css';

class Home extends Component {

  /*Estado inicial para mostrar contenido(Los navegadores son independientes)*/
  state = {
    content: 'Emitir',
  };

  /*Cambiará el estado en base al string que le envie el NavBar*/
  /* Estados: Home, Emitir, Modificar*/
  handleData = (string) => (this.setState({
      content: string,
    })
  );

  /*Representa la animación de borde donde se encuentre un error*/
  handleBorderFeedBack = (element) => {
    console.log(element);
    element.classList.add('border-feedback');
    setTimeout((element) =>  element.classList.remove('border-feedback'), 2000, element);
  };

  render() {
    var { content } = this.state;
    var {
      navBar,
      data,
      dataDb,
      unloggin,
      showProfile,
    } = this.props;
    // console.log(unloggin, showProfile);
    return (
      <LayoutSection
        class="Home"
      >
      {/*Barra de Navegación*/}
        <NavBar
          navBar={navBar}
          handleData={this.handleData}
        />
        {/*Manejador del user bar y del contenido*/}
        <Data
          data={data}
          state={content}
          empresa={dataDb.empresa}
          usuario={dataDb.usuario}
          unloggin={unloggin}
          showProfile={showProfile}
          handleBorderFeedBack={this.handleBorderFeedBack}
        />
      </LayoutSection>
    );
  }

}

export default Home;

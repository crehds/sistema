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

  render() {
    var { content } = this.state;
    var { navBar, data, dataDb } = this.props;
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
        />
      </LayoutSection>
    );
  }

}

export default Home;

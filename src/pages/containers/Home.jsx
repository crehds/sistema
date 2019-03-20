import React, { Component } from 'react';

import LayoutSection from '../../reusables/components/LayoutSection.jsx';

import NavBar from '../../navigators/containers/NavBar.jsx';
import Data from './Data.jsx';

import '../css/home.css';

class Home extends Component {

  /*Estado inicial para mostrar contenido(Los navegadores son independientes)*/
  state = {
    content: 'Home',
  };

  /*Cambiará el estado en base al string que le envie el NavBar*/
  /* Estados: Home, Emitir, Modificar*/
  handleData = (string) => this.setState({
      content: string,
    }
  );

  render() {
    var { content } = this.state;
    var { navBar, data } = this.props;
    return (
      <LayoutSection
        class="Home"
      >
        <NavBar
          navBar={navBar}
          handleData={this.handleData}
        />
        <Data
          data={data}
        />
      </LayoutSection>
    );
  }

}

export default Home;

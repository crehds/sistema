import React, { Component } from 'react';

import LayoutSection from '../../reusables/components/LayoutSection.jsx';

import Login from '../../login/containers/Login.jsx';
import Home from '../../pages/containers/Home.jsx';

import '../css/main.css';

class Main extends Component {

  state = {
    //modificar a true si se desea obviar el loggin al debugear
    isLogging: false,
  };

  /*El componente Main tendrá una segunda clase que se modificará dependiendo
    de esta función
  */
  addClassMain = (isLogging) => {
    var d = document.getElementById('Main');

    if (isLogging == false) {
      if (d.classList.contains('Home')) {
        d.classList.remove('Home');
      }
      d.classList.add('Login');
    } else {
      if (d.classList.contains('Login')) {
        d.classList.remove('Login');
      }

      d.classList.add('Home');
    }
  };

  /* Al terminar de implementar el componente se llama a la función,
    así se podrá optimizar el renderizado y un posterior uso de las cookies
  */
  componentDidMount() {
    this.addClassMain(this.state.isLogging);
  }

  /*Verifica el estado del componente para mostrar un error de login o
    mostrar la home */
  handleLoggin = (bool) => {
    if (bool == false)
      alert('Datos incorrectos');
    else {
      this.setState({
        isLogging: true,
      });
      this.addClassMain(true);
    }
  };

  showProfile = () => (
    alert('En desarrollo')
  );

  unloggin = () => {
    this.setState({
      isLogging: false,
    });
    this.addClassMain(false);
  };

  render() {
    var { home, dataDb } = this.props;
    return (
      <LayoutSection
        id="Main"
        class="Main"
      >
      {
        this.state.isLogging == false ?
        <Login
          login={this.props.login}
          handleLoggin={this.handleLoggin}
        />
        :
        <Home
          navBar={home.navBar}
          data={home.data}
          dataDb={dataDb}
          showProfile={this.showProfile}
          unloggin={this.unloggin}
        />
      }

      </LayoutSection>
    );
  }

}

export default Main;

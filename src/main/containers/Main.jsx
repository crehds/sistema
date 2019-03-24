import React, { Component } from 'react';
import swal from 'sweetalert';

import Login from '../../login/containers/Login.jsx';
import Home from '../../pages/containers/Home.jsx';

import LayoutSection from '../../reusables/components/LayoutSection.jsx';


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
  handleLoggin = async (bool) => {
    if (bool == false)
      swal('Datos incorrectos', { icon: 'error' });
    else {
      await swal('Datos Confirmados!!', {
        icon: 'success',
        buttons: false,
        timer: 1000,
      });
      this.setState({
        isLogging: true,
      });
      this.addClassMain(true);
    }
  };

  /*Mostrará (futuro) el Perfil del usuario*/
  showProfile = () => (
    swal('En desarrollo', {
      icon: 'info',
      buttons: false,
      timer: 1000,
    })
  );

  /*Cambia el estado para volver al login*/
  /*Invoca al manejador de clases del Main*/
  unloggin = async () => {
    await swal('Confirme su fin de sesión', {
      icon: 'warning',
      buttons: ['Salir', 'Seguir conectado'],
    }).then(response => {
      /*Si se retorna null o false(button Salir)*/
      if (!response) {
        this.setState({
          isLogging: false,
        });
        this.addClassMain(false);
      }
    });
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

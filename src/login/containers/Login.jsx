import React, { Component } from 'react';

//Componentes importados
import LayoutArticle from '../../reusables/components/LayoutArticle.jsx';
import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';
import Image from '../../reusables/components/Image.jsx';
import Formulario from '../components/Formulario.jsx';

import image from '../../assets/images/logo-dark.png';

import '../css/login.css';

class Login extends Component {

  state = {
    inputs: [],
  };

  authentication = (event) => {
    //Para que no se recargue la página
    event.preventDefault();
    // copia del login y de los datos ingresados
    var login = Object.assign({}, this.props.login);
    var template = this.state.inputs.map(e => e.value);

    // verificando que coincidan
    var result = Object.keys(login).map(e => login[e]).every((e, i) => e == template[i]);

    return this.props.handleLoggin(result);
  };

  setInputRef = (element) => (this.state.inputs.push(element));

  render() {
    return (
      <LayoutDiv
        class="Login"
      >
        <LayoutArticle
          class="login-logo-container"
        >
          <Image
            class="login-logo-image"
            src={image}
            alt="Logo de EICHE"
          />
          <Formulario
            authentication={this.authentication}
            setInputRef={this.setInputRef}
          />
        </LayoutArticle>
      </LayoutDiv>
    );
  }

}

export default Login;

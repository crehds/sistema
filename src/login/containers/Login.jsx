import React, { Component } from 'react';

//Componentes importados
import LayoutArticle from '../../reusables/components/LayoutArticle.jsx';
import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';
import Image from '../../reusables/components/Image.jsx';
import Formulario from '../components/Formulario.jsx';

import image from '../../assets/images/logo-dark.png';

import '../css/login.css';

class Login extends Component {

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
          <Formulario/>
        </LayoutArticle>
      </LayoutDiv>
    );
  }

}

export default Login;

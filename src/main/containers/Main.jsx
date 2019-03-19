import React, { Component } from 'react';
import LayoutSection from '../../reusables/components/LayoutSection.jsx';
import Login from '../../login/containers/Login.jsx';

class Main extends Component {

  state = {
    isLogging: false,
  };

  addClassMain = ({ isLogging }) => {
    var d = document.getElementById('Main');

    if (isLogging == false) {
      d.classList.add('Login');
    } else {
      if (d.classList.containes('Login')) {
        d.classList.remove('Login');
      }

      d.classList.add('Home');
    }
  };

  componentDidMount() {
    this.addClassMain(this.state);
  }

  authentication = () {

  };
  render() {
    return (
      <LayoutSection
        id="Main"
        class="Main"
      >
      {
        this.state.isLogging == false ?
        <Login/>
        :
        <div></div>
      }

      </LayoutSection>
    );
  }

}

export default Main;

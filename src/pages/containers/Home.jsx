import React, { Component } from 'react';

import LayoutSection from '../../reusables/components/LayoutSection.jsx';

import NavBar from '../../navigators/containers/NavBar.jsx';
import Data from './Data.jsx';

import '../css/home.css';

class Home extends Component {

  state = {
    data: 'Emitir',
  };

  handleData = (string) => this.setState({
      data: string,
    }
  );

  render() {
    var { data } = this.state;
    return (
      <LayoutSection
        class="Home"
      >
        <NavBar
          handleData={this.handleData}
        />
        <Data/>
      </LayoutSection>
    );
  }

}

export default Home;

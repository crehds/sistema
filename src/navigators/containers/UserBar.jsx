import React, { Component } from 'react';

import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';
import Search from '../components/Search.jsx';
import Notification from '../components/Notification.jsx';
import UserData from './UserData.jsx';
import Image from '../../reusables/components/Image.jsx';

import logo from '../../assets/images/logo1.png';

import '../css/userbar.css';

class UserBar extends Component {

  render() {
    return (
      <LayoutDiv
        class="UserBar"
      >
        <Image
          class="logo"
          src={logo}
          alt="logo de yunqui"
        />
        <Search/>
        <Notification/>
        <UserData/>
      </LayoutDiv>
    );
  }

}

export default UserBar;

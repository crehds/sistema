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
    var {
      image,
      search,
      notification,
      userData,
      unloggin,
      functionsSettings,
    } = this.props;
    console.log(functionsSettings[0]);
    return (
      <LayoutDiv
        class={this.props.class}
      >
        <Image
          class={image.class}
          src={image.src}
          alt={image.alt}
        />
        <Search
          search={search}
        />
        <Notification
          notification={notification}
        />
        <UserData
          userData={userData}
          functionsSettings={functionsSettings}
        />
      </LayoutDiv>
    );
  }

}

export default UserBar;

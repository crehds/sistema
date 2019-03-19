import React, { Component } from 'react';

import Icon from '../../reusables/components/Icon.jsx';
import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';

import '../css/notification.css';

class Notification extends Component {
  render() {
    return (
      <LayoutDiv class="Notification">
        <Icon class="icon-email"/>
        <Icon class="icon-notifications"/>
        <Icon class="icon-layers"/>
        {/*icons.map((icon) => (
          <Icon
            key={icon.id}
            icon={icon.icon}
          />
        ))*/}
      </LayoutDiv>
    );
  }
}

export default Notification;

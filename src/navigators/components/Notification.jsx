import React, { Component } from 'react';

import Icon from '../../reusables/components/Icon.jsx';
import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';

import '../css/notification.css';

class Notification extends Component {
  /*De momento solo esqueleto, no se implementa alguna funcionalidad*/
  render() {
    var {
      icons,
    } = this.props.notification;
    return (
      <LayoutDiv class={this.props.notification.class}>
        {icons.map((icon) => (
          <Icon
            key={`notif-${icon.id}`}
            class={icon.icon}
          />
        ))}
      </LayoutDiv>
    );
  }
}

export default Notification;

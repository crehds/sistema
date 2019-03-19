import React from 'react';
import Icon from '../../reusables/components/Icon.jsx';

export default function IconNavBar(props) {
  if (!props.name) {
    return (
      <a
        className={props.aOption}
        onClick={props.handleAddClass}
      >
        <Icon
          class={props.iClass}
        />
      </a>
    );
  } else {
    return (
      <a
        id={`a-${props.name}`}
        className={props.aOption}
        onClick={props.handleContent}
      >
        <Icon
          id= {`i-${props.name}`}
          class={props.iClass}
          title={props.name}
        />
        <p
          id={`p-${props.name}`}
        >{props.name}</p>
      </a>
    );
  }
}

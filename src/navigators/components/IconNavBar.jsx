import React from 'react';
import Icon from '../../reusables/components/Icon.jsx';

export default function IconNavBar(props) {
  /*Si se envía un contenido "name" se renderizaró un componente
    con más propiedades*/
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
    //La función de NavBar cortará el id hasta el carácter del "-"
    return (
      <a
        id={`a-${props.name}`}
        className={props.aOption}
        onClick={props.handleContent}
      >
        <Icon
          name= {`i-${props.name}`}
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

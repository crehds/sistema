import React from 'react';
// import './css/icon.css';

export default function Icon(props) {
  return (
    <i
      id={props.name}
      className={props.class}
      title={props.name}
      ref={props.setIRef}
      onClick={props.function}
    >
    </i>
  );
}

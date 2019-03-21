import React from 'react';

export default function LayoutDiv(props) {
  return (
    <div
      className={props.class}
      id={props.id}
    >
      {props.children}
    </div>
  );
}

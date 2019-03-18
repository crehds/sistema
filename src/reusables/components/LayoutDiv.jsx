import React from 'react';

export default function LayoutDiv(props) {
  return (
    <div className={props.class}>
      {props.children}
    </div>
  );
}

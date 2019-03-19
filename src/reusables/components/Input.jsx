import React from 'react';

export default function Input(props) {
  return (
    <input
      className={props.class}
      type={props.type}
      onSubmit={props.submit}
    />
  );
}

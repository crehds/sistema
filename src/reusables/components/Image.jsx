import React from 'react';

export default function Image(props) {
  return (
    <img
      className={props.class}
      src={props.src}
      alt={props.alt}
    />
  );
}

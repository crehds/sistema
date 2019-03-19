import React from 'react';
import './css/title.css';

export function Title1(props) {
  return (
    <h1 className={`title ${props.class}`}>
      {props.title}
    </h1>
  );
}

export function Title2(props) {
  return (
    <h2 className={`title ${props.class}`}>
      {props.title}
    </h2>
  );
}

export function Title3(props) {
  return (
    <h3 className={`title ${props.class}`}>
      {props.title}
    </h3>
  );
}

export function Title4(props) {
  return (
    <h4 className={`title ${props.class}`}>
      {props.title}
    </h4>
  );
}

export function Title5(props) {
  return (
    <h5 className={`title ${props.class}`}>
      {props.title}
    </h5>
  );
}

export function Title6(props) {
  return (
    <h6 className={`title ${props.class}`}>
      {props.title}
    </h6>
  );
}

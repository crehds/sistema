import React from 'react';

export default function LayoutSection(props) {
  return (
    <section id={props.id} className={props.class}>
      {props.children}
    </section>
  );
}

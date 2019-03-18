import React from 'react';

export default function LayoutSection(props) {
  return (
    <section className={props.class}>
      {props.children}
    </section>
  );
}

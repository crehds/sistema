import React from 'react';

import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';

import '../css/detailsprodvist.css';

export default function DetailProdVist(props) {
  return (
    <LayoutDiv
      id={props.id}
      class={props.class}
    >
      <LayoutDiv
        class={props.detailProdVistTitles.class}
      >
      {props.detailProdVistTitles.titles.map(e => (
        <h1
          key={e.id}
        >
        {e.title}
        </h1>
      ))}
      </LayoutDiv>
    </LayoutDiv>
  );
}

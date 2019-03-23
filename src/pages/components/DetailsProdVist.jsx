import React from 'react';

import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';

import '../css/detailsprodvist.css';

/*Componente que se encarga de encapsular los titles para obtener una vista más ordenada*/
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
          key={`dpv-${e.id}`}
        >
        {e.title}
        </h1>
      ))}
      </LayoutDiv>
      {/*Modificar la ruta de props.id en api*/}
      <LayoutDiv
        class="detailProdVist-container"
      >
      </LayoutDiv>

    </LayoutDiv>
  );
}

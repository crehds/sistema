import React from 'react';

import LayoutDiv from  '../../reusables/components/LayoutDiv.jsx';
import { Title4 as Title } from '../../reusables/components/Title.jsx';

import '../css/prods-pdf.css';

export default function ProdsPDF(props) {
  return (
    <LayoutDiv
      class={props.class}
    >
      <LayoutDiv
        class={props.titlesProdPDF.class}
      >
        {props.titlesProdPDF.titles.map(e => (
          <Title
            key={`titlesProd-${e.id}`}
            class={e.class}
            title={e.title}
          />
        ))}
      </LayoutDiv>
    </LayoutDiv>
  );
}

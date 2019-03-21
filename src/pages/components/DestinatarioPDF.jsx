import React from 'react';

import LayoutDiv from  '../../reusables/components/LayoutDiv.jsx';

import '../css/destinatario-pdf.css';

export default function DestinatarioPDF(props) {
  return (
    <LayoutDiv
      class={props.class}
    >
      {props.pdfDestinatario(props.contentDestinatario)}
    </LayoutDiv>
  );
}

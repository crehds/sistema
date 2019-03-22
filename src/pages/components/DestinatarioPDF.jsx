import React from 'react';

import LayoutDiv from  '../../reusables/components/LayoutDiv.jsx';

import '../css/destinatario-pdf.css';

/*Componente creado para mantener un estándar en el diseño. Su contenido es manejado por la funcion pdfDestinatario (PDF)*/
export default function DestinatarioPDF(props) {
  return (
    <LayoutDiv
      class={props.class}
    >
      {props.pdfDestinatario(props.contentDestinatario)}
    </LayoutDiv>
  );
}

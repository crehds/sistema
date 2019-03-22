import React from 'react';

import LayoutDiv from  '../../reusables/components/LayoutDiv.jsx';
import Image from '../../reusables/components/Image.jsx';

import '../css/empresa-pdf.css';

/*Contiene y muestra tanto el logo como los datos de la empresa*/
export default function EmpresaPDF(props) {
  var { src, alt } = props.image;
  return (
    <LayoutDiv
      class={props.class}
    >
      <Image
        src={src}
        alt={alt}
      />
      <LayoutDiv
        class={props.title.class}
      >
        {props.empresaTitle(props.empresa)}
      </LayoutDiv>
    </LayoutDiv>
  );
}

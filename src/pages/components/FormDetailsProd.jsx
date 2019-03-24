import React from 'react';

import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';
import Input from '../../reusables/components/Input.jsx';
import Button from '../../reusables/components/Button.jsx';

import '../css/formdetailsprod.css';

/*Formulario que envia los datos ingresados en cada input al componente Emitir y este al PDF*/
export default function FormDetailsprod(props) {
  var {
    handleDetailProd,
    detailsInputs,
    detailsInputsButton,
  } = props;
  return (
    <form
      id={props.id}
      className={props.class}
      onSubmit={handleDetailProd}
    >
      <LayoutDiv
        class={detailsInputs.class}
      >
      {
        detailsInputs.spans.map(e => (
          <span
            key={`span-${e.id}`}
          >
            <p>{e.text}</p>
            <Input
              type={e.type}
              place={e.placehold}
              inputRef={props.setDetRef}
            />
          </span>
        ))
      }
      </LayoutDiv>
      {/*Botón de añadir datos*/}
      <Button
        class={detailsInputsButton.class}
        text={detailsInputsButton.value}
      />
    </form>
  );
}

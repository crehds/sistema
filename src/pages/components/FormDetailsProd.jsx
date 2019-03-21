import React from 'react';

import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';
import Input from '../../reusables/components/Input.jsx';
import Button from '../../reusables/components/Button.jsx';

import '../css/formdetailsprod.css';

export default function FormDetailsprod(props) {
  var {
    handleDetailProd,
    detailsInputs,
    detailsInputsButton,
  } = props;
  return (
    <form
      className={props.class}
      onSubmit={handleDetailProd}
    >
      <LayoutDiv
        class={detailsInputs.class}
      >
      {
        detailsInputs.spans.map(e => (
          <span
            key={e.id}
          >
            <p>{e.text}</p>
            <Input
              type={e.type}
              place={e.placehold}
            />
          </span>
        ))
      }
      </LayoutDiv>
      <Button
        class={detailsInputsButton.class}
        text={detailsInputsButton.value}
      />
    </form>
  );
}

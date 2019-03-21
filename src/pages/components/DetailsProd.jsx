import React from 'react';

import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';
import FormDetailsProd from './FormDetailsProd.jsx';
import DetailsProdVist from './DetailsProdVist.jsx';
import DetailsProdButton from './DetailsProdButton.jsx';

import '../css/detailsprod.css';

export default function DetailsProd(props) {
  var {
    formInputs,
    detailProdVist,
    detailsProdButton,
  } = props.detailsProd;
  return (
    <LayoutDiv
      class={props.detailsProd.class}
    >
      <FormDetailsProd
        class={formInputs.class}
        detailsInputs={formInputs.detailsInputs}
        handleDetailProd={props.handleDetailProd}
        detailsInputsButton={formInputs.detailsInputsButton}
        setDetRef={props.setDetRef}
      />
      <DetailsProdVist
        class={detailProdVist.class}
        id={detailProdVist.idHTML}
        detailProdVistTitles={detailProdVist.detailProdVistTitles}
      />
      <DetailsProdButton
        buttons={detailsProdButton.buttons}
        showProd={props.showProd}
        resetDetailProdVist={props.resetDetailProdVist}
      />
    </LayoutDiv>
  );
}

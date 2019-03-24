import React from 'react';

import FormDetailsProd from './FormDetailsProd.jsx';
import DetailsProdVist from './DetailsProdVist.jsx';
import DetailsProdButton from './DetailsProdButton.jsx';

import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';

import '../css/detailsprod.css';

/*Componente que contiene todo los inputs y data
  para ingresar; y su posterior envío al PDF*/
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
      {/*Componente que muestra los inputs del destinatario y el documento*/}
      <FormDetailsProd
        id={formInputs.idHTML}
        class={formInputs.class}
        detailsInputs={formInputs.detailsInputs}
        handleDetailProd={props.handleDetailProd}
        detailsInputsButton={formInputs.detailsInputsButton}
        setDetRef={props.setDetRef}
      />
      {/*Componente que muestra los inputs
       para agregar un producto*/}
      <DetailsProdVist
        class={detailProdVist.class}
        id={detailProdVist.idHTML}
        detailProdVistTitles={detailProdVist.detailProdVistTitles}
        detailProdVistContainers={detailProdVist.detailProdVistContainers}
      />
      {/*Componente que contiene los botones que manejan la vista de los productos ingresados*/}
      <DetailsProdButton
        buttons={detailsProdButton.buttons}
        function1={props.showProd}
        function2={props.resetDetailProdVist}
      />
    </LayoutDiv>
  );
}

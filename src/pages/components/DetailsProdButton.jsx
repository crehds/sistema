import React from 'react';

import Button from '../../reusables/components/Button.jsx';

import '../css/detailsprodbutton.css';

/*Muestra los botones que controlan la vista detallada de los productos(Agregar y Resetear)*/
export default function DetailsProdButton(props) {
  return (
    props.buttons.map((e, i) => {
      if (i == 1) {
        return (
          <Button
            key={e.id}
            class={e.class}
            text={e.value}
            functionClick={props.showProd}
          />
        );
      } else {
        return (
          <Button
            key={e.id}
            class={e.class}
            text={e.value}
            functionClick={props.resetDetailProdVist}
          />
        );
      }
    })
  );
}

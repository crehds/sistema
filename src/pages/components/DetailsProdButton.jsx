import React from 'react';

import Button from '../../reusables/components/Button.jsx';

import '../css/detailsprodbutton.css';

/*Muestra los botones maestros de las vistas: productos(Agregar y Resetear) y Emitir(Guardar y Descargar)*/
/**/
export default function Buttons(props) {
  return (
    props.buttons.map((e, i) => {
      if (i == 0) {
        return (
          <Button
            key={e.id}
            class={e.class}
            text={e.value}
            functionClick={props.function1}
          />
        );
      } else {
        return (
          <Button
            key={e.id}
            class={e.class}
            text={e.value}
            functionClick={props.function2}
          />
        );
      }
    })
  );
}

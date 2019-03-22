import React, { Component } from 'react';

import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';
import Buttons from '../components/DetailsProdButton.jsx';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import '../css/buttonemitir.css';

/*Contenedor de los botones maestros para Guardar en la base de datos
y descargar el PDF*/
class ButtonEmitir extends Component {
  downloadDocument = () => {
    const input = document.getElementById('previewVist');
    console.log(input);
    html2canvas(input)
        .then((canvas) => {
          console.log(canvas);
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.save(`${input}.pdf`);
        });
  };

  render() {
    var {
      buttons,
    } = this.props.buttonsEmitir;
    return (
      <LayoutDiv
        class={this.props.buttonsEmitir.class}
      >
        <Buttons
          buttons={buttons}
          function1={this.downloadDocument}
          function2={this.props.putDocument}
        />
      </LayoutDiv>
    );
  }
}

export default ButtonEmitir;

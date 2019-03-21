import React, { Component } from 'react';

import LayoutSection from '../../reusables/components/LayoutSection.jsx';
import DetailsDocument from './DetailsDocument.jsx';
import DetailsProd from '../components/DetailsProd.jsx';
import PDF from './PDF.jsx';
import ButtonEmitir from './ButtonEmitir.jsx';

import '../css/emitir.css';

class Emitir extends Component {

  state = {
    options: 'Cotización',
    detailProd: [],//
    contentDestinatario: [],//contenido de Proveedor o cliente
    contentDocumento: [],//cotización o orden de compra
    templateDetailProd: [],
    prods: [],//arreglo finalluego de mostrar en el pdf.Listo para la bd
    tipoDestinatario: '',//proveedor o cliente
    estadoDocumento: '',// estados de cotización o orden de compra
    empresa: this.props.empresa,
    usuario: this.props.usuario
  };

  /*Maneja el combobox que determina las opciones*/
  handleOptions = (event) => (
    this.setState({
      options: event.target.value,
    })
  );

  /*Obtiene los datos del documento (orden de compra o cotización)*/
  getContentDetailsDocument = (content) => {
    console.log(content);
    this.setState({
      contentDestinatario: content.slice(0, 4).map(e => e.value),
      contentDocumento: content.slice(4).map(e => e.value),
    });
  };

  /*Sirve para obtener las valores ingresados antes de clickear
  al boton agregar para agregar a la tabla de detalle productos*/
  setDetRef = element => (
    this.state.detailProd.push(element)
  );

  /*Maneja la información que se muestra en cada detalle de producto*/
  /*(nombre,cantidad,precio) y los ingresa en un arreglo*/
  handleDetailProd = (event) => {
    event.preventDefault();
    console.log(this.state.detailProd);
    let array = this.state.detailProd.map(e => e.value);
    event.target.reset();
    console.log(array);
    return this.createDetailProd(array);
  };

  /*crea un detalle de producto*/
  createDetailProd = (data) => (
      data.forEach(e => {
      var d = document.getElementById('detail-prod-vist');
      console.log(d);
      var div = document.createElement('div');
      d.appendChild(div).classList.add('detalle-vist-detail');
      div.innerHTML = e;
      this.setDetailsProdRef(e);
    })
  );

  /*Maneja los valores que se visualizan en la tabla de detalle
  de productos creando una copia por cada fila de detalle(interno),
  todo esto antes de pulsar agregar al PDF*/
  setDetailsProdRef = (element) => (
    this.state.templateDetailProd.push(element)
  );

  /*Mostrará los datos en el PDF y limpiará la copia generada en setDetailsProdRef
  además de limpiar la vista de detalles de producto*/
  showProd = () => {
    this.setState({
      prods: this.state.templateProd,
      templateDetailProd: [],
    });
    this.resetDetailProdVist();
  };

  /*resetea la vista de productos*/
  resetDetailProdVist = () => {
    var d = document.getElementById('detail-prod-vist');
    while (d.children.length != 1) {
      d.removeChild(d.lastChild);
    }
  };

  putDocument = () => alert('En desarrollo');

  render() {
    var {
      contentDestinatario,
      contentDocumento,
      prods,
      empresa,
      usuario,
    } = this.state;

    var {
      detailsDocument,
      pdf,
      detailsProd,
      buttonsEmitir,
    } = this.props.emitir;

    return (
      <LayoutSection
        class={this.props.emitir.class}
      >
        <DetailsDocument
          options={this.state.options}
          detailsDocument={detailsDocument}
          handleOptions={this.handleOptions}
          getContentDetailsDocument={this.getContentDetailsDocument}
        />
        <PDF
          contentDocumento={contentDocumento}
          contentDestinatario={contentDestinatario}
          prods={prods}
          pdf={pdf}
          empresa={empresa}
          usuario={usuario}
        />
        <DetailsProd
          setDetRef={this.setDetRef}
          detailsProd={detailsProd}
          handleDetailProd={this.handleDetailProd}
          showProd={this.showProd}
          resetDetailProdVist={this.resetDetailProdVist}
        />
        <ButtonEmitir
          buttonsEmitir={buttonsEmitir}
          putDocument={this.putDocument}
        />
      </LayoutSection>
    );
  }
}

export default Emitir;

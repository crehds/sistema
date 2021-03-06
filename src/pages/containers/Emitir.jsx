import React, { Component } from 'react';
import swal from 'sweetalert';

import DetailsDocument from './DetailsDocument.jsx';
import DetailsProd from '../components/DetailsProd.jsx';
import PDF from './PDF.jsx';
import ButtonEmitir from './ButtonEmitir.jsx';

import LayoutSection from '../../reusables/components/LayoutSection.jsx';

import '../css/emitir.css';

class Emitir extends Component {

  state = {
    options: 'Cotización',
    detailProd: [],//contiene los datos antes de mostrarlos en tabla
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
    this.setState({
      contentDestinatario: content.slice(0, 4).map(e => e.value),
      contentDocumento: content.slice(4).map(e => e.value),
    });
  };

  /*Verificará que se ingresen datos correctos*/
  authenticationDetailsDocument = (content) => (
    content.every(e => e.value != '') && content.length != 0
  );

  /*Recibe un string para mostrar como alerta*/
  showError = (string, event) => {
    /*Se elimina "-button" para obtener el id donde
    añadir el borde de feedback*/
    let id = event.target.id.replace(/-button/g, '');
    let d = document.getElementById(id);

    /*Se añade borde para visualización del usuario*/
    setTimeout((string) => swal(string, {
      icon: 'error',
      buttons: false,
      timer: 1000,
    }).then(() => this.props.handleBorderFeedBack(d)), 250, string);
    /*El primer timer es de la duración del modal antes de cerrarse
    el segundo corresponde a que tan rápido aparece este modal*/
  };

  /*Sirve para obtener las valores ingresados antes de clickear
  al boton agregar para agregar a la tabla de detalle productos*/
  setDetRef = element => (
    this.state.detailProd.push(element)
  );

  /*Maneja la información que se muestra en cada detalle de producto*/
  /*(nombre,cantidad,precio) y los ingresa en un arreglo*/
  handleDetailProd = (event) => {
    let { detailProd } = this.state;
    event.preventDefault();
    if (this.authenticationDetailsDocument(detailProd)) {
      let array = detailProd.map(e => e.value);
      event.target.reset();
      return this.createDetailProd(array);
    } else {
      let string = 'Hace falta completar algún campo en Producto';
      this.showError(string, event);
    }
  };

  /*crea un detalle de producto*/
  createDetailProd = (data) => (
      data.forEach(e => {
      var d = document.getElementById('detailProdVist-container');
      var div = document.createElement('div');
      d.appendChild(div).classList.add('detailProd-vist-detail');
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
  showProd = (event) => {
    if (this.authenticationDetailsDocument(this.state.templateDetailProd)) {
      this.setState({
        prods: this.state.templateDetailProd,
      });
      this.resetDetailProdVist(event);
    } else {
      let string = 'No hay nada que añadir en la vista de detalle';
      this.showError(string, event);
    }
  };

  /*resetea la vista de productos*/
  resetDetailProdVist = (event) => {
    var d = document.getElementById('detailProdVist-container');
    /*Se convierte un HTMLcollection en un array con "..."*/
    var arr = [...d.children];
    if (this.authenticationDetailsDocument(arr)) {
      this.setState({
        templateDetailProd: [],
      });
      while (d.children.length != 0) {
        d.removeChild(d.lastChild);
      }
    } else {
      let string = 'No hay detalles para eliminar';
      this.showError(string, event);
    }
  };

  putDocument = () => swal('En desarrollo', {
    icon: 'info',
    buttons: false,
    timer: 1000,
  });

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
        {/*Contiene los datos para obtener el destinatario, documento, además de enviar la data a los estados de Emitir*/}
        <DetailsDocument
          options={this.state.options}
          detailsDocument={detailsDocument}
          handleOptions={this.handleOptions}
          getContentDetailsDocument={this.getContentDetailsDocument}
          authenticationDetailsDocument={this.authenticationDetailsDocument}
          showError={this.showError}
        />
        {/*Componente que define la estructura del pdf a descargar*/}
        <PDF
          contentDocumento={contentDocumento}
          contentDestinatario={contentDestinatario}
          prods={prods}
          pdf={pdf}
          empresa={empresa}
          usuario={usuario}
        />
        {/*Contiene la seccion donde se ingresan y visualizan los productos*/}
        <DetailsProd
          setDetRef={this.setDetRef}
          detailsProd={detailsProd}
          handleDetailProd={this.handleDetailProd}
          showProd={this.showProd}
          resetDetailProdVist={this.resetDetailProdVist}
        />
        {/*Contenedor de los botones maestros
          Guardar y Descargar*/}
        <ButtonEmitir
          buttonsEmitir={buttonsEmitir}
          putDocument={this.putDocument}
        />
      </LayoutSection>
    );
  }
}

export default Emitir;

import React, { Component } from 'react';

import ModificarOptions from '../components/ModificarOptions.jsx';
import SearchCotiOrder from './SearchCotiOrder.jsx';
import DetalleMod from './DetalleMod.jsx';
import ArrowContainer from './ArrowContainer.jsx';
import ButtonsContainer from './ButtonContainer.jsx';
import RelativeOptions from '../components/RelativeOptions.jsx';

import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';

import '../css/modificar.css';
import '../css/detalle-layout.css';

class Modificar extends Component {

  state = {
    options: 'Cotización',
    references: [],
    referencesRelative: [],
  };

  /*Manejará los datos ingresados para modificar el documento*/
  handleForm = (event) => {
    event.preventDefault();
    return console.log(event);
  };

  /*Manejador de las references de cada input*/
  handleReferences = (data) => (
    this.setState({
      referencesRelative: data,
    })
  );

  /*Maneja el combobox maestro*/
  handleOptions = (event) => (
    this.setState({
      options: event.target.value,
    })
  );

  setInputRef = element => this.state.references.push(element);

  render() {
    var cotizaOptions = {
      'Condición de pago': 'Mínimo 5 días',
      'Validez de oferta': 'Mínimo 7 días',
      'Tiempo de entrega': 'Máximo 30 días',
      'Lugar de entrega': 'Lugar de entrega',
      'Descuento ': 'Se descontará al total',
    };

    var orderOptions = {
      'Condición de pago': 'Mínimo una semana',
      'MonedaYTC': 'pesos o dólares',
      'Lugar de entrega': 'Lugar de entrega',
      'Plazo de entrega': 'Máximo 30 días',
      'Referencia': 'Cotización del proveedor',
      'Giro': 'Sin definir',
    };
    return (
      <form className="Modificar" onSubmit={this.handleForm}>
        {/*Componente que contiene el buscador de documento para rellenar los inputs*/}
        <SearchCotiOrder
          handleOptions={this.handleOptions}
          placeholder={this.state.options}
        />
        {/*Reemplazar con el reusable Title*/}
        <h1 className="actual">{`Actual ${this.state.options}`}</h1>
        <h1 className="nuevo">{`Nueva ${this.state.options}`}</h1>
        {/*Datos Generales*/}
        <ModificarOptions/>
        {this.state.options == 'Cotización' ?
          <RelativeOptions
            options={cotizaOptions}
            handleReferences={this.handleReferences}
          />
          :
          <RelativeOptions
            options={orderOptions}
            handleReferences={this.handleReferences}
          />
        }
        {/*Datos Generales*/}
        <ModificarOptions/>
        {this.state.options == 'Cotización' ?
          <RelativeOptions
          options={cotizaOptions}
          handleReferences={this.handleReferences}
          />
          :
          <RelativeOptions
            options={orderOptions}
            handleReferences={this.handleReferences}
          />
        }
        {/*Manejador de los detalles de producto*/}
        {/*Empaqueter en un componente*/}
        <LayoutDiv
          class="DetalleLayout"
        >
          <DetalleMod/>
          <ArrowContainer/>
          <DetalleMod/>
          <ButtonsContainer/>
        </LayoutDiv>
      </form>
    );
  }
}

export default Modificar;

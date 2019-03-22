import React, { Component } from 'react';

import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';
import SelectDetails from '../components/SelectDetails.jsx';
import Document from '../components/Document.jsx';

import '../css/detailsdocument.css';

class DetailsDocument extends Component {
  state = {
    options: this.props.options,
    content: '',
  };

  /*detecta el cambio de propiedades y setea un nuevo estado*/
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.options !== this.props.options) {
      this.setState({
        options: nextProps.options,
      });
    }
  }

  /*Maneja los datos que se ingresen en el formulario del componente Document*/
  /*Se enviará a Emitir*/
  handleForm = (data) => {
    return this.setState({
      content: data,
    });
  };

  /*Envía los datos al Componente Emitir para que este los envie al PDF*/
  /*Limpia los campos*/
  showInputs = (event) => {
    event.preventDefault();
    var { content } = this.state;
    if (this.props.authenticationDetailsDocument(content)) {
      this.props.getContentDetailsDocument(content);
      event.target.reset();
    } else {
      this.props.showError();
    }
  };

  /*Define la data que obtendra el componente document como propiedad*/
  /*Recibe un arreglo y el estado options*/
  defineDocument = (documents, state) => (
    documents.find(e => (
      e.description == state
    ))
  );

  render () {
    var {
      selectDetails,
      document,
    } = this.props.detailsDocument;

    var {
      options,
    } = this.state;

    return (
      <LayoutDiv class={this.props.detailsDocument.class}>
        <SelectDetails
          selectDetails={selectDetails}
          handleOptions={this.props.handleOptions}
        />
        <Document
          class={document.class}
          destinatario={document.destinatario}
          content={this.defineDocument(document.documents, options)}
          button={document.buttonDocument}
          handleForm={this.handleForm}
          showInputs={this.showInputs}
        />
      </LayoutDiv>
    );
  }
}

export default DetailsDocument;

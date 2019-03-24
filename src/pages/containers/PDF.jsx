import React, { PureComponent } from 'react';

import EmpresaPDF from '../components/EmpresaPDF.jsx';
import DestinatarioPDF from '../components/DestinatarioPDF.jsx';
import ProdsPDF from '../components/ProdsPDF.jsx';

import LayoutSection from '../../reusables/components/LayoutSection.jsx';
import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';

import '../css/pdf.css';

class PDF extends PureComponent {

  state = {
    ...this.props,
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        ...nextProps,
      });
    }
  }

  /*Manejador de los datos de la empresa*/
  empresaTitle= (empresa) => {
    var length = Object.values(empresa).length;
    var keys = Object.keys(empresa).slice(0, length - 2);
    return Object.values(empresa).slice(0, length - 2).map((e, i) => (
      <div key={i}>
      { i >= 2 && `/ ${keys[i]}: `}
      {e}
      </div>
    ));
  };

  /*Manejador de los datos del destinatario*/
  pdfDestinatario = (destinatario) => {
    var template = ['R_U_T', 'Cliente', 'Contacto', 'Correo'];
    return destinatario.length != 0 ? Object.values(destinatario).map((e, i) => (
      <div className="pdf-destinatario-div" key={`pdf-dest-${i}`}>
        <p>{template[i] + ' ' + ':'}</p>
        <p>{e}</p>
      </div>
    )) : template.map((e, i) => (
      <div className="pdf-destinatario-div" key={i}>
        <p>{e + ' ' + ':'}</p>
      </div>));
  };

  render() {
    var {
      contentDestinatario,
      contentDocumento,
      prods,
      empresa,
      usuario,
    } = this.state;

    var {
      dataEmpresaPDF,
      dataDestinatarioPDF,
      dataProdPDF,
      dataTributePDF,
      idHTML,
    } = this.props.pdf;
    return (

      <LayoutSection
        class={this.props.pdf.class}
        id={idHTML}
      >
      {/*Contiene el logo y los datos de la empresa
      se muestra en la parte superior del PDF*/}
        <EmpresaPDF
          class={dataEmpresaPDF.class}
          image={dataEmpresaPDF.image}
          title={dataEmpresaPDF.title}
          empresa={empresa}
          empresaTitle={this.empresaTitle}
        />
        {/*Contiene los datos del destinatario y
        se muestra en la parte de en medio del PDF*/}
        <DestinatarioPDF
          class={dataDestinatarioPDF.class}
          pdfDestinatario={this.pdfDestinatario}
          contentDestinatario={contentDestinatario}
        />
        {/*Contiene los datos de cada final de producto y se muestra en la parte inferior del PDF*/}
        <ProdsPDF
          class={dataProdPDF.class}
          titlesProdPDF={dataProdPDF.titlesProdPDF}
        />
        {/*Contiene datos calculados matemáticamente como el descuento y el IVR*/}
        {/*Sin desarrollar*/}
        <LayoutDiv className="pdf-details">
          <div>Condiciones Generales</div>
          <div>IVA y Total</div>
        </LayoutDiv>
      </LayoutSection>
    );
  }
}

export default PDF;

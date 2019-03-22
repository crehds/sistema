import React, { PureComponent } from 'react';

import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';
import Input from '../../reusables/components/Input.jsx';
import Button from '../../reusables/components/Button.jsx';

import '../css/document.css';

/*Contiene los datos del destinatario y del documento*/
class DetailsDocument extends PureComponent {

  state = {
    references: [],
    content: this.props.content,
  };

  /*Modificando el estado para mantener la referencia de los inputs*/
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.content !== this.props.content) {
      /*solución temporal en references debido a que no logré entender
      porqué se agrega una referencia adicional con cada cambio del
      combobox*/
      this.setState({
        references: this.state.references.slice(0, 9).filter(e => e != ''),
        content: nextProps.content,
      });
    }
  }

  /*Se invoca al método con cada cambio del estado*/
  handleContent = (content) => (
    Object.keys(content.inputs).map((e, i) => (
      <LayoutDiv
        key={`cont-${i}`}
        class={content.class}
      >
        <p>{e}</p>
        <Input
          type="text"
          place={content.inputs[e]}
          inputRef={this.setInputRef}
        />
      </LayoutDiv>
    ))
  );

  /*Al término de crearse el componente se envian la referencias de
  cada input para poder extraer sus datos*/
  componentDidMount () {
    this.props.handleForm(this.state.references);
  }

  /*Con cada cambio se envian las referencias*/
  componentDidUpdate(prevProps, prevState) {
    if (this.state.references !== prevState.references) {
      this.props.handleForm(this.state.references);
    }
  }

  /*Se obtienen la referencia de cada input para extraer el string ingresado*/
  setInputRef = element => {
    /*se evita ingresar referencias nulas*/
    if (element) {
      return this.state.references.push(element);
    }
  };

  render () {

    var {
      destinatario,
      button,
    } = this.props;

    var { content } = this.state;
    return (
      <form
        className={this.props.class}
        onSubmit={this.props.showInputs}
      >
        {/*Se manejan y muestran los inputs del destinatario*/}
        { Object.keys(destinatario).map((e, i) => (
            <LayoutDiv
              key={`dest-${i}`}
              class={content.class}
            >
              <p>{e}</p>
              <Input
                type="text"
                place={destinatario[e]}
                inputRef={this.setInputRef}
              />
            </LayoutDiv>
          ))
        }
        {/*Se manejan y muestran los inputs del documento*/}
        {
          this.handleContent(content)
        }
        <Button
          class={button.class}
          text={button.value}
        />
      </form>
    );
  }
}

export default DetailsDocument;

import React, { PureComponent } from 'react';

import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';
import Input from '../../reusables/components/Input.jsx';
import Button from '../../reusables/components/Button.jsx';

import '../css/document.css';

class DetailsDocument extends PureComponent {

  state = {
    references: [],
  };

  /*Al término de crearse el componente se envian la referencias de
  cada input para poder extraer sus datos*/
  componentDidMount () {
    this.props.handleForm(this.state.references);
  }

  setInputRef = element => this.state.references.push(element);

  render () {
    var {
      content,
      destinatario,
      button,
    } = this.props;
    return (
      <form
        className={this.props.class}
        onSubmit={this.props.showInputs}
      >
      {console.log(destinatario)}
      { Object.keys(destinatario).map((e, i) => (
          <LayoutDiv
            key={i}
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
      { Object.keys(content.inputs).map((e, i) => (
          <LayoutDiv
            key={i}
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

import React, { PureComponent } from 'react';

import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';

import '../css/selectDetails.css';

/*Componente que se encarga de mostrar el combobox
y de enviar el estado necesario para que los showInputs cambien de acuerdo al tipo de documento*/
class SelectDetails extends PureComponent {
  render() {
    var {
      parrafo,
      selectOption,
      selectTitle,
    } = this.props.selectDetails;
    return (
      <LayoutDiv
        class={this.props.selectDetails.class}
      >
        {/*Emitir*/}
        <p>{selectTitle}</p>
        {/*Combobox*/}
        <select
          name={selectOption.name}
          onChange={this.props.handleOptions.bind(this)}
        >
          {selectOption.options.map(e =>
            <option
              key={`option-${e.id}`}
              value={e.value}
            >
            {e.value}
            </option>
          )}
        </select>
      </LayoutDiv>
    );
  }
}

export default SelectDetails;

import React, { PureComponent } from 'react';

import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';

import '../css/selectDetails.css';

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
        <p>{selectTitle}</p>
        <select
          name={selectOption.name}
          onChange={this.props.handleOptions.bind(this)}
        >
          {selectOption.options.map(e =>
            <option
              key={e.id}
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

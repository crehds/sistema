import React, { PureComponent } from 'react';

class RelativeOptions extends PureComponent {
  state = {
    data: [],
  };

  componentDidMount() {
    this.props.handleReferences(this.state.data);
  }

  setInputRef = element => this.state.data.push(element);

  render() {
    var keys = Object.keys(this.props.options);
    var options = keys.map((e, i) => this.props.options[e]);

    return (
      <div className="modificaroptions-container">
      {options.map((e, i) => (
        <div className="modificar-detail">
          <p>{keys[i]}</p>
          <input
            key={i}
            type="text"
            ref={this.setInputRef}
            placeholder={e}
          />
        </div>
        )
      )}
      </div>
    );
  }
}

export default RelativeOptions;

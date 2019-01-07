import React from 'react';

class Input extends React.Component {
  handleFocus = (event) => {
    event.target.select();
  }

  render() {
    const { type, id, value, onChange } = this.props;

    return (
      <input type={type} id={id} className="form-control"
        value={value} onChange={onChange} onFocus={this.handleFocus}
      />
    );
  }
}

export default Input;


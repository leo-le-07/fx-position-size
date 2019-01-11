import React from 'react';

type PropsType = {
  type: string,
  id: string,
  value: string,
  onChange: () => void
};

class Input extends React.Component<PropsType> {
  handleFocus = (event: SyntheticInputEvent<HTMLInputElement>) => {
    event.target.select();
  };

  render() {
    const { type, id, value, onChange } = this.props;

    return (
      <input
        type={type}
        id={id}
        className="form-control"
        value={value}
        onChange={onChange}
        onFocus={this.handleFocus}
      />
    );
  }
}

export default Input;

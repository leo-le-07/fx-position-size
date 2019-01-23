import React from 'react';

interface IProps {
  type: string;
  id: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

class UIInput extends React.Component<IProps> {
  handleFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.select();
  };

  render() {
    const { type, id, value, onChange, className } = this.props;

    return (
      <input
        type={type}
        id={id}
        className={className}
        value={value}
        onChange={onChange}
        onFocus={this.handleFocus}
      />
    );
  }
}

export default UIInput;

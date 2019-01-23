import React from 'react';

interface IProps {
  options: Array<{ value: string; name: string }>;
  selectedOption: string;
  handleOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UIRadio = ({ options, selectedOption, handleOptionChange }: IProps) => {
  return (
    <div>
      {options.map((option, index) => (
        <div className="radio" key={index}>
          <label>
            <input
              type="radio"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleOptionChange}
            />{' '}
            {option.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default UIRadio;

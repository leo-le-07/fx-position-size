// @flow
import React from 'react';

type RadioType = {
  options: Array<{ value: string, name: string }>,
  selectedOption: string,
  handleOptionChange: (SyntheticEvent<HTMLOptionElement>) => void
};

const Radio = ({ options, selectedOption, handleOptionChange }: RadioType) => {
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

export default Radio;

import React from 'react';
import { mount } from 'enzyme';
import Radio from '../index.js';

describe('Radio', () => {
  test('should match snapshot', () => {
    const options = [
      { value: 'value-1', name: 'Value 1' },
      { value: 'value-2', name: 'Value 2' },
      { value: 'value-3', name: 'Value 3' },
    ];
    const wrapper = mount(
      <Radio
        options={options}
        selectedOption={'value-1'}
        handleOptionChange={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

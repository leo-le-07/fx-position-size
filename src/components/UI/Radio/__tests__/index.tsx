import React from 'react';
import { mount } from 'enzyme';
import UIRadio from '../index';

export const shouldRingBellOneHour = currentTime => {
  const nextHour = currentTime
    .clone()
    .add(1, 'hours')
    .startOf('hour');
  const timeToRing = nextHour.clone().subtract(50, 'seconds');
  return currentTime.isBetween(timeToRing, nextHour);
};

describe('UIRadio', () => {
  test('should match snapshot', () => {
    const options = [
      { value: 'value-1', name: 'Value 1' },
      { value: 'value-2', name: 'Value 2' },
      { value: 'value-3', name: 'Value 3' }
    ];
    const wrapper = mount(
      <UIRadio
        options={options}
        selectedOption={'value-1'}
        handleOptionChange={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

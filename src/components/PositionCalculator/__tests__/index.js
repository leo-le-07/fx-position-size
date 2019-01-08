import React from 'react';
import { shallow } from 'enzyme';
import PositionCalculator from '../index.js';

describe('PositionCalculator', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<PositionCalculator />);
    expect(wrapper).toMatchSnapshot();
  });
});

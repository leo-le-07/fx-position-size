import React from 'react';
import { shallow } from 'enzyme';
import PositionCalculator from '../index';

describe('PositionCalculator', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<PositionCalculator />);
    expect(wrapper).toMatchSnapshot();
  });
});

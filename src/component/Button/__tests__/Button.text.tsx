import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../index';

describe('Button Component', () => {

  it('should render without issues', () => {
    const compoennt = shallow(<Button title="hello world"/>);
    expect(compoennt.length).toBe(1);
  });
});
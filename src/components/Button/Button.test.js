import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button.js';

describe('Button', () => {
  it('Should match the snapShot', () => {
    const wrapper = shallow(<Button name={'People'} />);
    expect(wrapper).toMatchSnapshot();
  })
})
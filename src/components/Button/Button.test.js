import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button.js';

describe('Button', () => {
  let wrapper, mockControlFunc, name;

  beforeEach(() => {
    mockControlFunc = jest.fn();
    name='People';
    card = {}
    wrapper = shallow(
      <Button 
        name={name} 
        controlFunc={mockControlFunc}
      />);
  })

  it('Should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call controlFunc when  clicked and passed with right props' , () => {
    wrapper.find('button').simulate('click')
    expect(mockControlFunc).toHaveBeenCalledWith(name, card)
  })
})
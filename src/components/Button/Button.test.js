import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button.js';

describe('Button', () => {
  let wrapper, mockControlFunc, name, card;

  beforeEach(() => {
    mockControlFunc = jest.fn();
    name='People';
    card = {};
    wrapper = shallow(
      <Button 
        name={name} 
        controlFunc={mockControlFunc}
        isActive={''}
        card={card}
      />);
  });

  it('Should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call controlFunc when clicked', () => {
    wrapper.find('button').simulate('click');
    expect(mockControlFunc).toHaveBeenCalledWith(name, card);
  });
});
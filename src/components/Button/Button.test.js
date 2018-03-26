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

  it('Should had an ID of selected if active = name passed', () => {
    wrapper = shallow(<Button 
      name={name} 
      controlFunc={mockControlFunc}
      isActive={'People'}
      card={card}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should had an ID of selected if card.id is undefined', () => {
    const card = {
      id: undefined
    };
    wrapper = shallow(<Button 
      name={name} 
      controlFunc={mockControlFunc}
      isActive={'People'}
      card={card}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
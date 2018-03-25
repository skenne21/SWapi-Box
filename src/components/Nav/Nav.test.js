import React from 'react';
import {shallow} from 'enzyme';
import Nav from './Nav.js';

describe('Nav', () => {
  it('Should match the snapshot', () => {
    const wrapper = shallow(<Nav/>);
    expect(wrapper).toMatchSnapshot();
  });
});
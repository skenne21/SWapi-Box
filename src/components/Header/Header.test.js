import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header.js';

describe('Header', () => {
  it('Should match the snapshot', () => {
    const wrapper = shallow(<Header favorites={[]}/>);
    expect(wrapper).toMatchSnapshot();
  })
})
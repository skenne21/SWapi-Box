import React from 'react';
import { shallow } from 'enzyme';
import ScrollText from './ScrollText.js';

describe('ScrollText', () => {
  it('Should match the snapshot', () => {
    const film = {
      title: 'Attack of the clones',
      opening: 'It is a dark time for...',
      year: '2002'
    };
    const wrapper = shallow(<ScrollText film={film} />);
    expect(wrapper).toMatchSnapshot();
  });
});
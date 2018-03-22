import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount } from 'enzyme';
import App from './App';


describe('App shallow' , () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>)

  })

  it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  })

  it('it has a default state empty object for films', () => {
    expect(wrapper.state('film')).toEqual({})
  })

  it('it has a default state empty array for favorites', () => {
    expect(wrapper.state('favorites')).toEqual([])
  })

  it('it has a default state empty array for favorites', () => {
    expect(wrapper.state('favorites')).toEqual([])
  })

  it('it has a default state empty array for cards', () => {
    expect(wrapper.state('cards')).toEqual([])
  })

  it('it has a default state error of false', () => {
    expect(wrapper.state('error')).toEqual(false)
  })
});



import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount } from 'enzyme';
import App from './App';
import mockData from '../../Helpers/mockData.js';
import swapiData from '../../Helpers/helper.js'


describe('App shallow' , () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (<App/>)

  })

  it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  })

  it('Should a default state empty object for films', () => {
    expect(wrapper.state('film')).toEqual({})
  })

  it('Should a default state empty array for favorites', () => {
    expect(wrapper.state('favorites')).toEqual([])
  })

  it('Should a default state empty array for cards', () => {
    expect(wrapper.state('cards')).toEqual([])
  })

  it('Should a default state error of false', () => {
    expect(wrapper.state('error')).toEqual(false)
  })

  it('Should a default state of isActive, to a empty string', () => {
    expect(wrapper.state('isActive')).toEqual('')
  })

  it('Should a default state of targetFavorites to false', () => {
    expect(wrapper.state('targetFavorites')).toEqual(false)
  })

  it('Should add a film object to state when getMovie is called', async() => {
    expect(wrapper.state('film')).toEqual({})
    await wrapper.instance().getMovie()
    expect(wrapper.state('film').title).toBeDefined()
  })

  it('Should set the state of isActive to the user Input', () => {
    const card = {}
    expect(wrapper.state('isActive')).toEqual('');
    wrapper.instance().getCards('People', card)
    expect(wrapper.state('isActive')).toEqual('People');
    wrapper.instance().getCards('Vehicles', card);
    expect(wrapper.state('isActive')).toEqual('Vehicles')
  })

  it('Should return a people object if the userInput was people in the getCards function', async () => {
    const cleanPeople = [{
      name: "Luke Skywalker",
      homeworld: 'Somewhere',
      species: 'human',
      population: 30000
    }, {
      name: "C-3P0",
      homeworld: 'Somewhere',
      species: 'human',
      population: 30000
    }]
    const people = await wrapper.instance().getCards('People');

    await expect(people).resolves.toEqual(cleanPeople)
  })

  it('Should set the state of the Cards, with the returned api object',() => {
    const expected = [
        {
          name: "Luke Skywalker",
          homeworld: 'Somewhere',
          species: 'human',
          population: 30000
        }, {
          name: "C-3P0",
          homeworld: 'Somewhere',
          species: 'human',
          population: 30000
        }
      ]
    const apiData = mockData.mockCleanPeople();
    wrapper.instance().setCardsState(apiData)
    expect(wrapper.state('cards')).toEqual(expected)
  })

  it('Should call removeFavorites if the favorites in state inculdes a card that it was passed with', () => {
    const retrieved = {
          name: "C-3P0",
          homeworld: 'Somewhere',
          species: 'human',
          population: 30000
    }
    const spy = jest.spyOn(wrapper.instance(), 'removeFavorites')
    wrapper.setState({favorites: [retrieved]})
    wrapper.instance().toggleFavorites('people', retrieved)
    expect(spy).toHaveBeenCalledWith(retrieved)
  })

  it('Should call addFavorties if the card is not in the favorites array', () => {
    const retrieved = {
      name: "Luke Skywalker",
      homeworld: 'Somewhere',
      species: 'human',
      population: 30000
    }
    wrapper.setState({favorites: []})
    const spy = jest.spyOn(wrapper.instance(), 'addFavorites')
    wrapper.instance().toggleFavorites('people', retrieved)
    expect(spy).toHaveBeenCalledWith(retrieved)
  })

  it('Should remove the card that was passed from the favorites' ,() => {
    const retrieved = {
      name: "Luke Skywalker",
      homeworld: 'Somewhere',
      species: 'human',
      population: 30000
    }
    expect(wrapper.state('favorites')).toEqual([])
    wrapper.instance().addFavorites(retrieved)
    expect(wrapper.state('favorites')).toEqual([retrieved])
  })

  it('Should set the state of targetFavorites to true when showFavorites is called', () => {
    
    expect(wrapper.state('targetFavorites')).toEqual(false)
    wrapper.instance().showFavorites()
    expect(wrapper.state('targetFavorites')).toEqual(true)
  })

  it('Should set the state of cards to the favorites array when targetFavorites is called', () => {
    const cards = [{
      name: "C-3P0",
      homeworld: 'Somewhere',
      species: 'human',
      population: 30000
    }]
    const favorites = [{
      name: "Luke Skywalker",
      homeworld: 'Somewhere',
      species: 'human',
      population: 30000
    }]
    wrapper.setState({cards: cards})
    expect(wrapper.state('cards')).toEqual(cards)
    wrapper.setState({favorites: favorites});
    wrapper.instance().showFavorites();
    expect(wrapper.state('cards')).toEqual(favorites)

  })

});



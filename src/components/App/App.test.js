import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';
import mockData from '../../Helpers/mockData.js';



describe('App shallow', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should a default state empty object for films', () => {
    expect(wrapper.state('film')).toEqual({});
  });

  it('Should a default state empty array for favorites', () => {
    expect(wrapper.state('favorites')).toEqual([]);
  });

  it('Should a default state empty array for cards', () => {
    expect(wrapper.state('cards')).toEqual([]);
  });

  it('Should a default state error of false', () => {
    expect(wrapper.state('error')).toEqual(false);
  });

  it('Should a default state of isActive, to a empty string', () => {
    expect(wrapper.state('isActive')).toEqual('');
  });

  it('Should a default state of targetFavorites to false', () => {
    expect(wrapper.state('targetFavorites')).toEqual(false);
  });

  it('Should add a film object to state when getMovie is called', async() => {
    expect(wrapper.state('film')).toEqual({});
    await wrapper.instance().getMovie();
    expect(wrapper.state('film').title).toBeDefined();
  });

  it('Should set the state of isActive to the user Input', () => {
    const card = {};
    expect(wrapper.state('isActive')).toEqual('');
    wrapper.instance().getCards('People', card);
    expect(wrapper.state('isActive')).toEqual('People');
    wrapper.instance().getCards('Vehicles', card);
    expect(wrapper.state('isActive')).toEqual('Vehicles');
  });

  it('fetches randomFilm upon componentDidMount', async () => {
    const film = mockData.cleaned.film;
    const mockGetMovie = jest.fn().mockImplementation(
      () => Promise.resolve(film));
    expect(wrapper.state('film')).toEqual({});
    await wrapper.instance().componentDidMount();
    expect(mockGetMovie).toHaveBeenCalled();
    expect(wrapper.state('film')).toEqual(film);
  });

  it('Should return a people', async () => {

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
    }];

    const people = await wrapper.instance().getCards('People');
    await expect(people).toEqual(cleanPeople);
  });

  it('Should set the state of the Cards with a object', () => {
    const expected = [
      {
        pname: "Luke Skywalker",
        phomeworld: 'Somewhere',
        pspecies: 'human',
        population: 30000
      }, {
        name: "C-3P0",
        homeworld: 'Somewhere',
        species: 'human',
        population: 30000
      }
    ];
    const apiData = mockData.mockCleanPeople();
    wrapper.instance().setCardsState(apiData);
    expect(wrapper.state('cards')).toEqual(expected);
  });

  it('Should call removeFavorites if card is in array', () => {
    const retrieved = {
      name: "C-3P0",
      homeworld: 'Somewhere',
      species: 'human',
      population: 30000
    };
    const spy = jest.spyOn(wrapper.instance(), 'removeFavorites');
    wrapper.setState({favorites: [retrieved]});
    wrapper.instance().toggleFavorites('people', retrieved);
    expect(spy).toHaveBeenCalledWith(retrieved);
  });

  it('Should call addFavorties when card is in array', () => {
    const retrieved = {
      name: "Luke Skywalker",
      homeworld: 'Somewhere',
      species: 'human',
      population: 30000
    };
    wrapper.setState({favorites: []});
    const spy = jest.spyOn(wrapper.instance(), 'addFavorites');
    wrapper.instance().toggleFavorites('people', retrieved);
    expect(spy).toHaveBeenCalledWith(retrieved);
  });

  it('Should remove the card that was passed from the favorites', () => {
    const retrieved = {
      name: "Luke Skywalker",
      homeworld: 'Somewhere',
      species: 'human',
      population: 30000
    };
    expect(wrapper.state('favorites')).toEqual([]);
    wrapper.instance().addFavorites(retrieved);
    expect(wrapper.state('favorites')).toEqual([retrieved]);
  });

  it('Should set the state of targetFavorites to true', () => {
    expect(wrapper.state('targetFavorites')).toEqual(false);
    wrapper.instance().showFavorites();
    expect(wrapper.state('targetFavorites')).toEqual(true);
  });

  it('Should set the state of cards to the favorites array', () => {
    const cards = [{
      name: "C-3P0",
      homeworld: 'Somewhere',
      species: 'human',
      population: 30000
    }];
    const favorites = [{
      name: "Luke Skywalker",
      homeworld: 'Somewhere',
      species: 'human',
      population: 30000
    }];
    wrapper.setState({cards: cards});
    expect(wrapper.state('cards')).toEqual(cards);
    wrapper.setState({favorites: favorites});
    wrapper.instance().showFavorites();
    expect(wrapper.state('cards')).toEqual(favorites);
  });
});



import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

global.localStorage = {
  getItem(keyword) {
    if (!global.localStorage[keyword]) {
      return null;
    }
    return JSON.stringify(global.localStorage[keyword]);
  },
  setItem(keyword, value) {
    global.localStorage[keyword] = value;
  }
}; 


describe("App shallow", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />, {disableLifecycleMethods: true});
  });

  it("Should match the snapShot", () => {
    expect(wrapper).toMatchSnapshot();
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
    await wrapper.update();
    expect(wrapper.state('film').title).toBeDefined();
  });

  it('Should set the sate of isActive with the user input', async ()  => {
    const card = {};
    expect(wrapper.state('isActive')).toEqual('');
    await wrapper.instance().getCards('People', card);
    wrapper.update();
    expect(wrapper.state('isActive')).toEqual('People');
    await wrapper.instance().getCards('Vehicles', card);
    wrapper.update();
    expect(wrapper.state('isActive')).toEqual('Vehicles');
  });

  it('Should add a person Object to state', async () => {
    const url = 'https://swapi.co/api/people';
    const response = {
      results: [{
        "gender": "Male",
        "homeworld": "https://swapi.co/api/planets/1/",
        "name": "Luke Skywalker",
        "species": ["https://swapi.co/api/species/1/"]
      }]
    };
    const expected = [{
      "class": "people",
      "info": {
        "homeworld": "Homeworld: undefined",
        "population": "Population undefined",
        "species": undefined
      },
      "name": "Name: Luke Skywalker"
    }];

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: 'true',
      json: () =>  Promise.resolve(response)
    }));

    await wrapper.instance().getCards('People', {});
    window.fetch(url);
    await wrapper.update();
    expect(wrapper.state('cards')).toEqual(expected);
  });

  it('Should add a vehicle Object to state', async () => {
    const url = 'https://swapi.co/api/vehicles';
    const response = { results: [{
      "cargo_capacity": "50000",
      "crew": "46",
      "model": "Digger Crawler",
      "name": "Sand Crawler",
      "passengers": "30",
      "vehicle_class": "wheeled"
    }]};
    const expected = [{
      "class": "vehicle", 
      "info": {
        "model": "Model: Digger Crawler",
        "passengers": "Passengers: 30",
        "vehicleClass": "Vehicle Class: wheeled"
      }, 
      "name": "Name: Sand Crawler"
    }];

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: 'true',
      json: () =>  Promise.resolve(response)
    }));

    await wrapper.instance().getCards('Vehicles', {});
    window.fetch(url);
    await wrapper.update();
    expect(wrapper.state('cards')).toEqual(expected);
  });

  it('Should add a planet Object to state', async () => {
    const url = 'https://swapi.co/api/planets';
    const response = {
      results: [{
        "climate": "temperate",
        "name": "Alderaan",
        "population": "200000",
        "terrain": "grasslands, mountains",
        "orbital_period": "304",
        "residents": []
      }]
    };
    const expected = [{
      "class": "planet",
      "info": {
        "climate": "Climate: temperate",
        "population": "Population: 200000",
        "residents": "none",
        "terrain": "Terrain: grasslands, mountains"
      }, "name": "Name: Alderaan"
    }];

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: 'true',
      json: () =>  Promise.resolve(response)
    }));

    await wrapper.instance().getCards('Planets', {});
    window.fetch(url);
    await wrapper.update();
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

  it('Should set favorites to local storage', () => {
    const mockData = [{card:'hello'}];
    wrapper.setState({favorites: mockData});
    
    wrapper.instance().setLocalStorage();
    const storage = JSON.parse(global.localStorage.getItem('favorites'));
    expect(JSON.parse(storage)).toEqual(mockData);
  });

  it('Should get items from localStorage', () =>{
    const mockData = [{card:'hello'}];
    global.localStorage.setItem('favorites', mockData);
    wrapper.instance().getFromStorage();
    expect(wrapper.state('favorites')).toEqual(mockData);
  });
});




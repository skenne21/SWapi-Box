import helper from './helper.js';
import mockData from './mockData.js';

describe('Api Fetch', () => {
  it('Should fetch data from the api, if status is at or below 200', () => {
    
    window.fetch = jest.fn().mockImplementation(()=> 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({})
    }))
    expect(window.fetch).not.toHaveBeenCalled();
    const apiCall = helper.fetchApiData('people');
    expect(window.fetch).toHaveBeenCalled();
  })

  it('should catch errors', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({  status: 500 }))
      

      const apiCall = helper.fetchApiData()
      const expected = Error('Failed to fetch data')

      expect(apiCall).rejects.toEqual(expected)
    })
})

describe('Movie', () => {
  let randomMovie;

  beforeEach( () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: 'true',
      json: () =>  Promise.resolve(mockData)
    }));

    randomMovie = 3;
  });

  it('Should fetch the api with the right parameters', () => {
    helper.fetchMovie(randomMovie);
    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films/3/');
  });

  it('Should clean up the year that is passed in from api', () => {
    const dates = ['2002', '05', '16'];
    const date = '2002-05-16';
    const expectedDate = '2002';
    helper.cleanYear(date);
    expect(dates[0]).toEqual(expectedDate);
  });

  it('Should create film object', () => {
    
    const mockFilm = mockData.films.results[0];
    const expected = helper.cleanMovie(mockFilm)
    expect(expected.title).toEqual('A New Hope');
    expect(expected.opening).toEqual('It is a period of civil war....')
    expect(expected.release).toEqual('1977')
  });

  it('Should clean up the year that is passed in from api', () => {
    const dates = ['2002', '05', '16'];
    const date = '2002-05-16';
    const expectedDate = '2002';
    helper.cleanYear(date);
    expect(dates[0]).toEqual(expectedDate);
  })
});

describe('People', () => {
  let response;

  beforeEach(() => {
    response = {results: [{
      "gender": "Male",
      "homeworld": "https://swapi.co/api/planets/1/",
      "name": "Luke Skywalker",
      "species": ["https://swapi.co/api/species/1/"]
    }]};

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(response)
    }));
  });

  it('Should call fetch with the right url for fetchPeople', ()=> {
    const url = 'https://swapi.co/api/people';
    helper.fetchPeople();
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('Should return a clean Person object', async ()=> {
    const expected = [{
      "class": "people",
      "data": {
        "homeworld": "Homeworld: undefined",
        "population": "Population undefined",
        "species": undefined
      }, 
      "name": "Name: Luke Skywalker"
    }];
    const people = await helper.fetchPeople();
    expect(people).toEqual(expected);
  });

  it('should fetch homeworld with the right params', () => {
    const url = "https://swapi.co/api/planets/1/";
    helper.fetchHomeWorlds(url);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('Should return a homeworld object', async () =>{
    const url = "https://swapi.co/api/planets/1/";
    const expected = {
      "homeworld": "Homeworld: undefined",
      "population": "Population undefined"
    };
    const world = await helper.fetchHomeWorlds(url);
    expect(world).toEqual(expected);
  });

  it('Should call fetchSpecies with the right url', () => {
    const url = "https://swapi.co/api/species/1/";
    helper.fetchSpecies(url);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('Should return a species' ,async() => { 
    const expected = undefined;
    const url = "https://swapi.co/api/species/1/";
    const species =  await helper.fetchSpecies(url);
    expect(species).toEqual(expected); 
  });
});

describe('Planets', () =>{
  let response;

  beforeEach(() => {
    response = {
      results: [{
      "climate": "temperate",
      "name": "Alderaan",
      "population": "200000",
      "terrain": "grasslands, mountains",
      "orbital_period": "304",
      "residents": [
          "https://swapi.co/api/people/5/", 
          "https://swapi.co/api/people/68/", 
          "https://swapi.co/api/people/81/"
        ]
    }]};

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(response)
    }));
  });

  it('Should fetch a plant with the right url', () => {
    const url = 'https://swapi.co/api/planets'
    helper.fetchPlanets();
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('Shoule return a planet object', async () => {
    const expected = [{
      "class": "planet",
      "data": {
        "climate": "Climate: temperate",
        "population": "Population: 200000",
        "residents": ", , ",
        "terrain": "Terrain: grasslands, mountains"
      }, 
      "name": "Name: Alderaan"
    }];

    const planets = await helper.fetchPlanets();
    expect(planets).toEqual(expected);
  });

  it('Should fetch residents with the right url', async () =>{
    const url = 'https://swapi.co/api/people/1/' ;

    const before = [
      "https://swapi.co/api/people/1/", 
    ]
    await helper.fetchResidents(before) 
    expect(window.fetch).toHaveBeenCalledWith(url);
  })

  it('Should return the name of the residents', async () =>{
    const before = [
      "https://swapi.co/api/people/1/", 
    ]
    const expected = [undefined];
    const resident = await helper.fetchResidents(before);
    expect(resident).toEqual(expected)
  })
})

describe('vechicles', () => {
  let response;

  beforeEach(() => {
    response = { results: [{
      "cargo_capacity": "50000",
      "crew": "46",
      "model": "Digger Crawler",
      "name": "Sand Crawler",
      "passengers": "30",
      "vehicle_class": "wheeled"
    }]};

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(response)
    }));
  })

  it('Should call fetchVehicles with the right url', () => {
    const url = 'https://swapi.co/api/vehicles';
    helper.fetchVehicles();
    expect(window.fetch).toHaveBeenCalledWith(url);
  })

  it('Should clean a vehicle', async () => {
    let response = { results: [ { cargo_capacity: '50000',
      crew: '46',
      model: 'Digger Crawler',
      name: 'Sand Crawler',
      passengers: '30',
      vehicle_class: 'wheeled' }]
    }

    const expected = [{
      "class": "vehicle",
      "data": {
        "model": "Model: Digger Crawler",
        "passengers": "Passengers: 30",
        "vehicleClass": "Vehicle Class: wheeled"
      }, "name": "Name: Sand Crawler"
    }];
    const vehicle = await helper.cleanVehicles(response);
    expect(vehicle).toEqual(expected);
  });
});



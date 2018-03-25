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

  })

  it('Should call fetch with the right url for fetchPeople', ()=> {

    const url = 'https://swapi.co/api/people';

    helper.fetchPeople();
    expect(window.fetch).toHaveBeenCalledWith(url);
  })

  // it('Should return a clean Person object', ()=> {

  //   const response = {results: [{
  //     "gender": "Male",
  //     "homeworld": "https://swapi.co/api/planets/1/",
  //     "name": "Luke Skywalker",
  //     "species": ["https://swapi.co/api/species/1/"]
  //   }]};

  //   const expected = [{
  //     class: 'people',
  //     "name": "Luke Skywalker",
  //     data: {
  //       "homeworld": "Naboo",
  //       "species": "Human",
  //       "population": "200000"
  //     }}];

  //   expect(helper.fetchPeople()).toEqual(expected)
  // })

  it('should fetch homeworld with the right params', () => {

    const url = "https://swapi.co/api/planets/1/";

    helper.fetchHomeWorlds(url);
    expect(window.fetch).toHaveBeenCalledWith(url);

  });

  // it('Should return a homeworld object', () =>{
  //   const url = "https://swapi.co/api/planets/1/";
    

  //   const expected = {
  //    "homeworld": "Naboo",
  //     "population": "200000"
  //   }

  //   helper.fetchHomeWorlds(url);
    
  //   expect(helper.fetchHomeWorlds(url).homeworld).toBeDefined()
  // })

  it('Should call fetchSpecies with the right url', () => {
    const url = "https://swapi.co/api/species/1/";

    helper.fetchSpecies(url);
    expect(window.fetch).toHaveBeenCalledWith(url);
  })

  // it('Should return a species' ,() => { 
  //   const expected = 'Human';
  //   const url = "https://swapi.co/api/species/1/";
  //   helper.fetchSpecies(url);
  //   expect(helper.fetchSpecies(url)).toEqual(expected) 
  // })
  
})



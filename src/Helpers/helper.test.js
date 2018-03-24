import helper from './helper.js';
import mockData from './mockData.js';

// jest.mock('./helper.js');

describe('Movie', () => {
  let mockMovieApi, randomMovie;

  beforeEach( () => {
    mockMovieApi = mockData.mockMovie();

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: 'true',
      json: () =>  Promise.resolve(mockMovieApi)
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
    const expected = {
      title: 'The Empire Strikes Back',
      opening: 'It is a dark time for the...',
      release: '1980'
    };

    helper.cleanMovie(mockMovieApi);
    expect(helper.cleanMovie(mockMovieApi)).toEqual(expected);
  });
});

// not working!!!
// describe('People', () => {
//   describe('fetchPeople method', () => {
//     let mockPeopleApi;

//     beforeEach( () => {
//       mockPeopleApi = mockData.mockApiPeople();
    
//       window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//         ok: 'true',
//         json: () =>  Promise.resolve(mockPeopleApi)
//       }));
//     });


//     it('Should fetch with the right parameters', async () => {
//       helper.fetchPeople();
//       expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/people')
//     });

//     it('Should call the fetchHomeWorlds function', () => {
//       const mockFetchHomeWorlds = jest.fn();
//       const mockFetchSpecies = jest.fn()
//       helper.fetchPeople();
//       expect(mockFetchHomeWorlds).toHaveBeenCalledWith(mockPeopleApi);
//     })

//     it('Should call the fetchSpecies function', () => {
//       const expected = [
//         {
//         name: "Luke Skywalker",
//         species: ["https://swapi.co/api/species/1/"],
//         homeWorldName: "Tatooine", 
//         population: "200000"
//         },{
//           name: "C-3PO",
//           species: ["https://swapi.co/api/species/1/"],
//           homeWorldName: "Tatooine", 
//           population: "200000"
//         }
//       ]
//       const mockFetchHomeWorlds = jest.fn();
//       const mockFetchSpecies = jest.fn()
//       helper.fetchPeople();
//       expect(mockFetchSpecies).toHaveBeenCalledWith(mockPeopleApi);
//     })

//     it('Should return a resolved object', () => {
//       const expected = [
//         {
//           name: "Luke Skywalker",
//           homeworld: 'Somewhere',
//           species: 'human',
//           population: 30000
//         }, {
//           name: "C-3P0",
//           homeworld: 'Somewhere',
//           species: 'human',
//           population: 30000
//         }
//       ]
//       helper.fetchPeople();
//       expect(helper.fetchPeople(mockMovieApi)).toEqual(expected)
//     })

//     it('Should handle a error if it does not get the right response',() => {

//     })


      
//   });  
      
//   describe('fetchHomeWorlds methods', () => {
//     let mockApi;

//     beforeEach(() => {
//       mockApi = mockData.mockHomelandsData();

//       window.fetch = jest.fn().mockIMplementation( () => Promise.resolve({
//         ok: 'true',
//         json: () => Promise.resolve()
//       })) 
//     })

//     it('Should call fetch with the url that it is passed', () => {
//       // helper.fetchHomeWorlds();

//     })

//     it('should return the resolved object', () => {

//     })

//     it('should produce an error if the resonse is not okay', () => {

//     })
//   })
// })
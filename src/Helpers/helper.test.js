import helper from './helper.js';
import mockData from './mockData.js';

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

  it('Should fetch a movie when fetchMovie method is called', () => {
    expect(window.fetch).not.toHaveBeenCalled();
    helper.fetchMovie(randomMovie);
    expect(window.fetch).toHaveBeenCalled();
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

  // it('Should call clean year function and pass the movie date', () => {
  //   const apiDate = mockMovieApi.release_date
  //   const expectedDate = '1980-05-17';
  //   const cleanYearMock = jest.fn()
  //   helper.cleanMovie(mockMovieApi)
  //   expect(helper.cleanYear(apiDate)).toHaveBeenCalledWith(expectedDate)
  // })
});

describe('People', () => {
  describe('fetchPeople method', () => {
    let mockPeopleApi;

    beforeEach( () => {
      mockPeopleApi = mockData.mockApiPeople();
    
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: 'true',
        json: () =>  Promise.resolve(mockPeopleApi)
      }));
    });

    it('Should call fetch with people', () => {
      expect(window.fetch).not.toHaveBeenCalled();
      helper.fetchPeople();
      expect(window.fetch).toHaveBeenCalled();
    });

    it('Should fetch with the right parameters', () => {
      helper.fetchPeople();
      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/people');
    });

    // test not passing
    it('should return a person with homeworlds data', () => {
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
      ];
      // expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/people')
      helper.fetchPeople();
      expect(helper.fetchPeople()).resolve.toEqual(expected);
    });
  });
  

  // it('Should call fetchHomeWorlds',  async () => {
    
  //   expect(helper.fetchHomeWorlds(mockPeopleApi)).toHaveBeenCalled()
  // })
  // it('Should call fetchHomeWorlds and pass data')
  // it('Should call fetchSpecies and pass people')
  // it('')
  // it('Should create a object for each person with a home world')
});

// describe('Planets' , () => {
//   let mockApi;

//     beforeEach( () => {
//       mockApi = mockData.mockApiPlanets();
      
//       window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//           ok: 'true',
//           json: () =>  Promise.resolve(mockApi)
//       }))
//     })

//     it('Should call fetch', () => {
//         expect(window.fetch).not.toHaveBeenCalled()
//         helper.fetchPlanets()
//         expect(window.fetch).toHaveBeenCalled()
//       })

//       it('Should fetch with the right parameters', () => {
//         helper.fetchPlanets();
//         expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/planets');
//       })
//   })

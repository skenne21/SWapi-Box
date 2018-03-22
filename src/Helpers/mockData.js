const mockMovie = () => {
  return {
      title: "The Empire Strikes Back",
      episode_id: 5,
      opening_crawl: 'It is a dark time for the...',
      director: "Irvin Kershner", 
      release_date: '1980-05-17',
  } 
}

const mockApiPeople = () => {
  return [
  {
    name: "Luke Skywalker", 
    height: "172", 
    mass: "77", 
    hair_color: 
    "blond", 
    skin_color: 
    "fair", 
    homeworld:"https://swapi.co/api/planets/1/",
    species:["https://swapi.co/api/species/1/"]
  },{
    name: "C-3PO",
    height: "167", 
    mass: "75", 
    hair_color: "n/a", 
    skin_color: "gold",
    homeworld:"https://swapi.co/api/planets/1/",
    species:["https://swapi.co/api/species/1/"]
  }]
}

const mockHomelandData = () => {
  return [
    {
      name: "Luke Skywalker",
      homeworld:"https://swapi.co/api/planets/1/",
      species:["https://swapi.co/api/species/1/"],
      population: undefined,
    }, {
      name: "C-3PO",
      homeworld:"https://swapi.co/api/planets/1/",
      species:["https://swapi.co/api/species/1/"],
      population: undefined,
    } 
  ]
}

const mockSpecies = () => {
  return [
    {
      name: "Luke Skywalker",
      homeworld: 'Somewhere',
      species: "https://swapi.co/api/species/1/",
      population: 30000,
    }, {
      name: "C-3P0",
      homeworld: 'Somewhere',
      species: "https://swapi.co/api/species/1/",
      population: 30000,
    }
  ]
}

const mockApiPlanets = () => {
  return [{
    climate:"temperate",
    created:"2014-12-10T11:35:48.479000Z",
    name: "Alderaan",
    population:"2000000000",
    residents:["https://swapi.co/api/people/5/", "https://swapi.co/api/people/68/", "https://swapi.co/api/people/81/"],
    terrain:"grasslands, mountains",
  }]
}



export default {
  mockMovie, 
  mockApiPeople, 
  mockHomelandData, 
  mockSpecies,
  mockApiPlanets, 
}
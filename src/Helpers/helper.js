const apiRoot = 'https://swapi.co/api/';

const fetchMovie = (randomMovie) => {
  return fetch(`${apiRoot}films/${randomMovie}/`)
    .then(response => response.json());
};

const cleanYear = (date) => {
  const dates = date.split('-');
  return dates[0];
};

const cleanMovie = (apiData)  => {
  return {
    title: apiData.title,
    opening: apiData.opening_crawl,
    release: cleanYear(apiData.release_date)
  };
};

const fetchPeople = () => {
  return fetch(`${apiRoot}people`)
    .then(response => response.json())
    .then(apiData => fetchHomeWorlds(apiData.results))
    .then(people => fetchSpecies(people))
    .catch(error => console.log(error));
};

const fetchHomeWorlds = (people) => {
  const promises = people.map( person => {
    return fetch(person.homeworld)
      .then( response => response.json())
      .then(homeworldData => ({
        name: person.name, 
        species: person.species, 
        homeWorldName: homeworldData.name, 
        population:homeworldData.population
      }))
      .catch( error => console.log(error));   
  });
  return Promise.all(promises);
};

const fetchSpecies = (people) => {
  const promises = people.map( person => {
    return fetch(person.species)
      .then(response => response.json())
      .then(speciesData => ({...person, species: speciesData.name}))
      .catch( error => console.log(error));
  });
  return Promise.all(promises);
};

const fetchPlanets = () => {
  return fetch(`${apiRoot}planets`)
    .then(response => response.json())
    .then(planetData =>  cleanPlanets(planetData))
    .then(planets => fetchResidents(planets));
};

const cleanPlanets = (planetData) => {
  const planets = planetData.results.map( planet => ({
    name: planet.name,
    terrain: planet.terrain,
    population: planet.population,
    climate: planet.climate,
    residents: planet.residents
  }));
  return planets;
};

const fetchResidents = (planets) => {
  const planetPromise = planets.map( planet => {
    const residentPromises = planet.residents.map( resident => {
      return fetch(resident)
        .then(response => response.json())
        .then(residentData => residentData.name);
    });
    return Promise.all(residentPromises)
      .then(planetData => ({...planet, residents: planetData}));
  });
  return Promise.all(planetPromise);
};

const fetchVehicles = () => {
  return fetch(`${apiRoot}vehicles`)
    .then(response => response.json())
    .then(apiData => cleanVehicles(apiData));
};

const cleanVehicles = (vehicleData) => {
  const vehicles = vehicleData.results.map( vehicle => ({
    name: vehicle.name,
    model: vehicle.model,
    passengers: vehicle.passengers,
    vehicleClass: vehicle.vehicle_class
  }));
  return vehicles;
};

export default {
  cleanMovie,
  cleanYear, 
  fetchMovie, 
  fetchPeople, 
  fetchPlanets, 
  fetchVehicles,
  fetchHomeWorlds,
  fetchSpecies
};

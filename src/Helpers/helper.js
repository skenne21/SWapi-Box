const apiRoot = 'https://swapi.co/api/';

const fetchApiData = async (url) => {
  try {
    const response = await fetch(url);
    const apiData = await response.json();
    return apiData;
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}

const fetchMovie = async (randomMovie) => {
  const apiData = await fetchApiData(`${apiRoot}films/${randomMovie}/`)
  return apiData
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

const fetchPeople = async () => {
  const apiData = await fetchApiData(`${apiRoot}people`);
  const peoplePromises = apiData.results.map( async person => {
    const name = person.name;
    const homeworld = await 
      fetchHomeWorlds(person.homeworld)
    const species = await fetchSpecies(person.species)
    const info = Object.assign({},homeworld, {species})
    return ({
      class:'people',
      name: name,
      data: info
    });
  }) 
  return Promise.all(peoplePromises)
};

const fetchHomeWorlds =  async (homeworld) => {
  const apiData = await fetchApiData(homeworld);
  return {
    homeworld:apiData.name,
    population: apiData.population
  }
}

const fetchSpecies = async (species) => {
  const apiData = await fetchApiData(species);
  return apiData.name;
};

const fetchPlanets = async () => {
  const apiData = await fetchApiData(`${apiRoot}planets`);
  const planetPromise = apiData.results.map( async planet => {
    const residentsList = await fetchResidents(planet.residents)
    return ({
      class: 'planet',
      name: planet.name,
      data: {
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: residentsList.length ? 
          residentsList.join(', ') : 'none'
      }
    })
  })
  return Promise.all(planetPromise)
}

const fetchResidents = (residents) => {
  const residentPromises = residents.map( async residentsURl => {
    const apiData = await fetchApiData(residentsURl);
    return apiData.name
  })
  return Promise.all(residentPromises)
}

const fetchVehicles = async () => {
  const apiData = await fetchApiData(`${apiRoot}vehicles`);
  const clean = await cleanVehicles(apiData);
  return clean;
};

const cleanVehicles = async (vehicleData) => {
  const vehicles = vehicleData.results.map( async vehicle => ({
    class: 'vehicle',
    name: vehicle.name,
    data: {
      model: vehicle.model,
      passengers: vehicle.passengers,
      vehicleClass: vehicle.vehicle_class
    }
  }))
  return Promise.all(vehicles)
};

export default {
  cleanMovie,
  cleanYear,
  cleanVehicles, 
  fetchMovie, 
  fetchPeople, 
  fetchPlanets, 
  fetchVehicles,
  fetchHomeWorlds,
  fetchSpecies, 
  fetchApiData,
  fetchResidents
};

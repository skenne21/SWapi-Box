const apiRoot = 'https://swapi.co/api/';

const fetchMovie = () => {
  const randomMovie = Math.floor(Math.random() * (7 - 1)) + 1
  return fetch(`${apiRoot}films/${randomMovie}/`)
    .then(response => response.json())
}

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
}

const fetchPeople = () => {
  return fetch(`${apiRoot}people`)
    .then(response => response.json())
    .then(data => fetchHomeWorlds(data.results))
    .then(people => fetchSpecies(people))
    .catch(error => console.log(error))
}

const fetchHomeWorlds = (people) => {
  const promises = people.map( person => {
    return fetch(person.homeworld)
      .then( response => response.json())
      .then(data => ({
        name: person.name, 
        species: person.species, 
        homeWorldName: data.name, 
        population:data.population
      }))
      .catch( error => console.log(error))   
  })
  return Promise.all(promises)
}

const fetchSpecies = (people) => {
  const promises = people.map( person => {
    return fetch(person.species)
      .then(response => response.json())
      .then(data => ({...person, species: data.name}))
      .catch( error => console.log(error))
  })
  return Promise.all(promises)
}

export default {
  cleanMovie, 
  fetchMovie, 
  fetchPeople
};

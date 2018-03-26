/* eslint-disable */

const fetchMovie = () => {
  return {
    "film": {
      "scroll": "STAR WARS...",
      "title": "SITH",
      "date": "2017"
    }
  }
}

const fetchPeople = () => {
  return [
    {
      name: 'Name: Luke skywalker',
      class: "people",
      population: 'Population: 10000',
      species: 'Species: human',
      homeworld: "Homeworld: Tatooine",
    }
  ]
}

const fetchPlanets = () => {
  return [
    {
      card: "planet",
      name: "Name: Dagobah",
      data: {
        climate: "Climate: murky",
        population: "Population: unknown",
        residents: "none",
        terrain: " Terrian: swamp, jungles",
      }   
    }
  ]

}

const fetchVehicles = () => {
  return [
    { 
      class: "vehicle",
      name: "Sand Crawler",
      data: {
        model: "Model: Digger Crawler",
        passengers: "Passengers: 30",
        "vehicleClass": "Vehilce Class: wheeled",
      } 
    },
  ]
}

export {
  fetchMovie,
  fetchPeople,
  fetchPlanets,
  fetchVehicles
}
const mockData = {
  "cleaned": {
    "people": {
      "class": "people",
      "name": "Luke Skywalker",
      "data": {
        "homeworld": "Naboo",
        "species": "Human" 
      },
    },
    "film": {
      "scroll": "STAR WARS...",
      "title": "SITH",
      "date": "2017"
    },
    "planet": [{
      "class": "planet",
      "name": "NABOO",
      "data": {
        "terrain": "sandy",
        "population": "4",
        "climate": "hot",
        "residents": "none"
      },
    }],
    "vehicle": [{
      "class": "vehicles",
      "name":"ship",
      "data": {
        "model": "seven",
        "class": "wheeled",
        "passengers": "9"
      },
    }]
  },
  "people": {
    "count": 1, 
    "next": "https://swapi.co/api/people/?page=2", 
    "previous": null, 
    "results": [
      {
        "name": "Luke Skywalker", 
        "height": "172", 
        "mass": "77", 
        "hair_color": "blond", 
        "skin_color": "fair", 
        "eye_color": "blue", 
        "birth_year": "19BBY", 
        "gender": "male", 
        "homeworld": "https://swapi.co/api/planets/1/", 
        "films": [
          "https://swapi.co/api/films/2/", 
          "https://swapi.co/api/films/6/", 
          "https://swapi.co/api/films/3/", 
          "https://swapi.co/api/films/1/", 
          "https://swapi.co/api/films/7/"
        ], 
        "species": [
          "https://swapi.co/api/species/1/"
        ], 
        "vehicles": [
          "https://swapi.co/api/vehicles/14/", 
          "https://swapi.co/api/vehicles/30/"
        ], 
        "starships": [
          "https://swapi.co/api/starships/12/", 
          "https://swapi.co/api/starships/22/"
        ], 
        "created": "2014-12-09T13:50:51.644000Z", 
        "edited": "2014-12-20T21:17:56.891000Z", 
        "url": "https://swapi.co/api/people/1/"
      }
    ]
  },
  "planets": {
    "count": 1, 
    "next": "https://swapi.co/api/planets/?page=2", 
    "previous": null, 
    "results": [
      {
        "name": "Alderaan", 
        "rotation_period": "24", 
        "orbital_period": "364", 
        "diameter": "12500", 
        "climate": "temperate", 
        "gravity": "1 standard", 
        "terrain": "grasslands, mountains", 
        "surface_water": "40", 
        "population": "2000000000", 
        "residents": [
          "https://swapi.co/api/people/5/", 
          "https://swapi.co/api/people/68/", 
          "https://swapi.co/api/people/81/"
        ], 
        "films": [
          "https://swapi.co/api/films/6/", 
          "https://swapi.co/api/films/1/"
        ], 
        "created": "2014-12-10T11:35:48.479000Z", 
        "edited": "2014-12-20T20:58:18.420000Z", 
        "url": "https://swapi.co/api/planets/2/"
      }
    ]
  },
  "vehicles": {
    "count": 1, 
    "next": "https://swapi.co/api/vehicles/?page=2", 
    "previous": null, 
    "results": [
      {
        "name": "Sand Crawler", 
        "model": "Digger Crawler", 
        "manufacturer": "Corellia Mining Corporation", 
        "cost_in_credits": "150000", 
        "length": "36.8", 
        "max_atmosphering_speed": "30", 
        "crew": "46", 
        "passengers": "30", 
        "cargo_capacity": "50000", 
        "consumables": "2 months", 
        "vehicle_class": "wheeled", 
        "pilots": [], 
        "films": [
          "https://swapi.co/api/films/5/", 
          "https://swapi.co/api/films/1/"
        ], 
        "created": "2014-12-10T15:36:25.724000Z", 
        "edited": "2014-12-22T18:21:15.523587Z", 
        "url": "https://swapi.co/api/vehicles/4/"
      }
    ]
  },
  "films": {
    "count": 7, 
    "next": null, 
    "previous": null, 
    "results": [
      {
        "title": "A New Hope", 
        "episode_id": 4, 
        "opening_crawl": "It is a period of civil war....", 
        "director": "George Lucas", 
        "producer": "Gary Kurtz, Rick McCallum", 
        "release_date": "1977-05-25", 
        "characters": [
          "https://swapi.co/api/people/1/", 
          "https://swapi.co/api/people/2/", 
          "https://swapi.co/api/people/3/", 
          "https://swapi.co/api/people/4/", 
          "https://swapi.co/api/people/5/", 
          "https://swapi.co/api/people/6/", 
          "https://swapi.co/api/people/7/", 
          "https://swapi.co/api/people/8/", 
          "https://swapi.co/api/people/9/", 
          "https://swapi.co/api/people/10/", 
          "https://swapi.co/api/people/12/", 
          "https://swapi.co/api/people/13/", 
          "https://swapi.co/api/people/14/", 
          "https://swapi.co/api/people/15/", 
          "https://swapi.co/api/people/16/", 
          "https://swapi.co/api/people/18/", 
          "https://swapi.co/api/people/19/", 
          "https://swapi.co/api/people/81/"
        ], 
        "planets": [
          "https://swapi.co/api/planets/2/", 
          "https://swapi.co/api/planets/3/", 
          "https://swapi.co/api/planets/1/"
        ], 
        "starships": [
          "https://swapi.co/api/starships/2/", 
          "https://swapi.co/api/starships/3/", 
          "https://swapi.co/api/starships/5/", 
          "https://swapi.co/api/starships/9/", 
          "https://swapi.co/api/starships/10/", 
          "https://swapi.co/api/starships/11/", 
          "https://swapi.co/api/starships/12/", 
          "https://swapi.co/api/starships/13/"
        ], 
        "vehicles": [
          "https://swapi.co/api/vehicles/4/", 
          "https://swapi.co/api/vehicles/6/", 
          "https://swapi.co/api/vehicles/7/", 
          "https://swapi.co/api/vehicles/8/"
        ], 
        "species": [
          "https://swapi.co/api/species/5/", 
          "https://swapi.co/api/species/3/", 
          "https://swapi.co/api/species/2/", 
          "https://swapi.co/api/species/1/", 
          "https://swapi.co/api/species/4/"
        ], 
        "created": "2014-12-10T14:23:31.880000Z", 
        "edited": "2015-04-11T09:46:52.774897Z", 
        "url": "https://swapi.co/api/films/1/"
      }
    ]
  }
}
export default mockData;



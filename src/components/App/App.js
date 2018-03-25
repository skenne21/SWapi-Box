import React, { Component } from 'react';
import Nav from '../Nav/Nav.js';
import Main from '../Main/Main.js';
import Header from '../Header/Header.js';
import swapiData from '../../Helpers/helper.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      film: {},
      favorites: [],
      cards: [],
      isActive: '',
      targetFavorites: false, 
      error: false
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie = async () => {
    try {
      const randomMovie = Math.floor(Math.random() * (7 - 1)) + 1;
      const response = await swapiData.fetchMovie(randomMovie);
      const apiData = await swapiData.cleanMovie(response);
      this.setState({film: apiData});
    } catch (error) {
      this.setState({error: error.message});
    }
  }

  getCards =  async (userInput, ...args) => {
    this.setState({isActive: userInput});
    switch (userInput) {
    case 'People':
      const people = await swapiData.fetchPeople();
      this.setCardsState(people);
      break;
    case 'Planets':
      const planets = await swapiData.fetchPlanets();
      this.setCardsState(planets);
      break;
    case 'Vehicles': 
      const vehicles = await swapiData.fetchVehicles();
      this.setCardsState(vehicles);
      break;
    default : 
      console.log('error')
      break
    }  
  };

  setCardsState = (apiData) => {
    this.setState({cards: apiData});
  }

  toggleFavorites = (name, card) => {
    if (this.state.favorites.includes(card)) {
      this.removeFavorites(card);
    } else {
      this.addFavorites(card);
    }
  }

  removeFavorites = (card) => {
    card.id = undefined;
    const filterFavs = this.state.favorites.filter( favs => {
      return favs.id !== card.id;
    });
    this.setState({favorites: filterFavs});
  }

  addFavorites = (card) => {
    card.id = this.state.favorites.length;
    const newFavorites = [...this.state.favorites, card];
    this.setState({favorites: newFavorites});
  }

  showFavorites = () => {
    this.setState({targetFavorites: true});
    this.setState({cards: this.state.favorites});
  } 

  render() {
    const { 
      favorites,
      film,
      cards,
      isActive,
      targetFavorites 
    } = this.state; 

    return (
      <div className="App">
        <Header 
          favorites={favorites}
          showFavorites={this.showFavorites}
        />
        <Nav
          controlFunc={this.getCards}
          isActive={isActive}
        />
        <Main 
          film={film}
          cards={cards}
          toggleFavorites={this.toggleFavorites}
          targetFavorites={targetFavorites}
          showFavorites={this.showFavorites}
          favorites={favorites}
        />
      </div>
    );
  }
}

export default App;



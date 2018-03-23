import React, { Component } from 'react';
import Nav from '../Nav/Nav.js';
import Main from '../Main/Main.js';
import Header from '../Header/Header.js';
// import Favorites from '../Favorites/Favorites.js';
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

  getMovie = () => {
    const randomMovie = Math.floor(Math.random() * (7 - 1)) + 1
    swapiData.fetchMovie(randomMovie)
      .then(apiData => {
        const movie = swapiData.cleanMovie(apiData);
        this.setState({film: movie});
      })
      .catch(error => this.setState({error: error}));
  }

  getCards = (userInput, card ={}) => {
    this.setState({isActive: userInput})
    if (userInput === 'People') {
      swapiData.fetchPeople()
        .then(apiData => this.setCardsState(apiData))
        .catch(error => this.setState({error: error}));
    }
    if (userInput === 'Planets') {
      swapiData.fetchPlanets()
        .then(apiData => this.setCardsState(apiData))
        .catch(error => this.setState({error: error}));
    }
    if (userInput === 'Vehicles') {
      swapiData.fetchVehicles()
        .then( apiData => this.setCardsState(apiData))
        .catch(error => this.setState({error: error}));
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
      return favs.id !== card.id
    })
    this.setState({favorites: filterFavs});
  }

  addFavorites = (card) => {
    card.id = this.state.favorites.length;
    const newFavorites = [...this.state.favorites, card];
    this.setState({favorites: newFavorites});
  }

  showFavorites = () => {
    this.state.favorites.length ? 
      this.addFavoritesToCard() : 
      this.errorMessage()
  } 
  
  addFavoritesToCard = () => {
    if(!this.state.targetFavorites) {
      this.setState({targetFavorites: true})
      this.setState({cards: this.state.favorites})
    }
  }

  errorMessage = () => {
    
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



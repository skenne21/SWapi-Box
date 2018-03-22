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
      error: false
    };
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

  setCardsState = (apiData) => {
    this.setState({cards: apiData});
  }

  getCards = (userInput) => {
    if (userInput === 'People') {
      swapiData.fetchPeople()
        .then(apiData => this.setCardsState(apiData));
      console.log(this.state.cards)
    }
    if (userInput === 'Planets') {
      swapiData.fetchPlanets()
        .then(apiData => this.setCardsState(apiData));
    }
    if (userInput === 'Vehicles') {
      swapiData.fetchVehicles()
        .then( apiData => this.setCardsState(apiData));
    }  
  };
  
  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { favorites, film, cards } = this.state; 
    return (
      <div className="App">
        <Header 
          favorites={favorites}/>
        <Nav
          controlFunc={this.getCards}/>
        <Main 
          film={film}
          cards={cards}/>
      </div>
    );
  }
}

export default App;



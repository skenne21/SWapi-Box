import React, { Component } from 'react';
import Nav from '../Nav/Nav.js';
import Main from '../Main/Main.js';
import Header from '../Header/Header.js';
import swapiData from '../../helper.js'


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      film: {},
      favorites: [],
      cards: []
    }
  }

  getMovie = () => {
    swapiData.fetchMovie()
      .then(apiData => {
        const movie = swapiData.cleanMovie(apiData);
        this.setState({film: movie})
      })
      .catch(error => console.log(error));
  }

  setCardsState = (apiData) => {
    this.setState({cards: apiData})
  }

  getCards = (userInput) => {
    if (userInput === 'People') {
      const people = swapiData.fetchPeople()
        .then(apiData => this.setCardsState(apiData))
    }
    if (userInput === 'Planets') {
      const planets = swapiData.fetchPlanets()
        .then(apiData => this.setCardsState(apiData))
    }
    if (userInput === 'Vehicles') {
      const vehicles = swapiData.fetchVehicles()
        .then( apiData => this.setCardsState(apiData))
    }
     
  }
  
  componentDidMount() {
    // this.getMovie();
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



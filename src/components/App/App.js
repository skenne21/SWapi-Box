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

  getCards = (userInput) => {
    if (userInput === 'people') {
      const people = swapiData.fetchPeople()
        .then(apiData => this.setState({people: apiData}))
    }
   
  }
  

 

  componentDidMount() {
    // this.getMovie();
    this.getCards('people');
  }

  render() {
  const { favorites, film, cards } = this.state; 
    return (
      <div className="App">
        <Header 
          favorites={favorites}/>
        <Nav/>
        <Main 
          film={film}
          cards={cards}/>
      </div>
    );
  }
}

export default App;



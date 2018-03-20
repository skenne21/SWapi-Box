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
    }
  }

  getMovie = () => {
    const randomMovie = Math.floor(Math.random() * (7 - 1)) + 1
    fetch(`https://swapi.co/api/films/${randomMovie}/`)
      .then(response => response.json())
      .then(apiData => {
        console.log(apiData)
        const movie = swapiData.cleanMovie(apiData);
        this.setState({film: movie})
      })
      .catch(error => console.log(error));
  }

  getCards = (userInput) => {
    fetch(`https://swapi.co/api/${userInput}`)
      .then(response => response.json())
      .then(apiData => {
        
        // console.log(data)
        // [input] = `${input}Data(data)`
        
      })
      .catch(error => console.log(error));
  }
  

 

  componentDidMount() {
    // this.getMovie();
    this.getCards('people');
  }

  render() {
  const { favorites, film } = this.state; 
    return (
      <div className="App">
        <Header 
          favorites={favorites}/>
        <Nav/>
        <Main 
          film={film}/>
      </div>
    );
  }
}

export default App;



import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.js';
import './Card.css';

const Card = (props) => {
  const pickCards = (props) => {
    if (props.climate) {
      return planetCards(props);
    }
    if (props.species) {
      return peopleCards(props);
    }
    if(props.model) {
      return vehiclesCards(props);
    }
  }

  const planetCards = (props) => {
    const { 
      name, 
      terrain, 
      population, 
      climate, 
      residents,
      toggleFavorites,
      card } = props;

    const createResidents = residents.map((resident, index) => ( 
      <p key={index}>{resident}</p>))
  
    return (
      <article className='planets'>
        <h1> {name} </h1>
        <Button
          name={'❤︎'} 
          controlFunc={toggleFavorites}
          card={card}
        />
        <h4> {terrain} </h4>
        <h5> {population} </h5>
        <h5> {terrain} </h5>
        {createResidents}
        <h3> {climate} </h3>
      </article>
    )
  }
  
  const peopleCards = (props) => {
    const { 
      name, 
      homeWorldName, 
      species, 
      population, 
      toggleFavorites, 
      card} = props;
    return (
      <article className='people'>
        <h1> {name} </h1>
        <Button
          name={'❤︎'}
          controlFunc={toggleFavorites}
          card={card}
        />
        <h4> {homeWorldName} </h4>
        <h5> {population} </h5>
        <h5> {species} </h5>
      </article>
    )
  }

  const vehiclesCards = (props) => {
    const { 
      name,
      model,
      passengers,
      vehicleClass,
      toggleFavorites,
      card } = props;
    return (
      <article className='vehicle'>
        <h1> {name} </h1>
        <Button 
          name={'❤︎'}
          controlFunc={toggleFavorites}
          card={card}
        />
        <h4> {model} </h4>
        <h5> {passengers} </h5>
        <h5> {vehicleClass} </h5>
      </article>
    )
  }

  return (
    <div className='card'>
      {pickCards(props)}
    </div>
  )
}
Card.propTypes = {
  name: PropTypes.string, 
  terrain: PropTypes.string,  
  climate: PropTypes.string, 
  residents: PropTypes.array,
  homeWorldName: PropTypes.string, 
  species: PropTypes.string, 
  population: PropTypes.string,
  model: PropTypes.string, 
  passengers: PropTypes.string, 
  vehicleClass: PropTypes.string,
  toggleFavorites: PropTypes.func,
  card: PropTypes.object 
}
export default Card;
import React from 'react';
import './Card.css';
import Button from '../Button/Button.js'

const Card = (props) => {
  const PickCards = (props) => {
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
      residents } = props;

    const createResidents = residents.map((resident, index) => <p key={index}>{resident}</p>)
  
    return (
      <article className='planets'>
        <h1> {name} </h1>
        <Button name={'❤︎'}/>
        <h4> {terrain} </h4>
        <h5> {population} </h5>
        <h5> {terrain} </h5>
        {createResidents}
        <h3> {climate} </h3>
      </article>
    )
  }
  
  const peopleCards = (props) => {
    const { name, homeWorldName, species, population} = props;
    return (
      <article className='people'>
        <h1> {name} </h1>
        <Button name={'❤︎'}/>
        <h4> {homeWorldName} </h4>
        <h5> {population} </h5>
        <h5> {species} </h5>
      </article>
    )
  }

  const vehiclesCards = (props) => {
    const { name, model, passengers, vehicleClass } = props;
    return (
      <article className='vehicle'>
        <h1> {name} </h1>
        <Button name={'❤︎'}/>
        <h4> {model} </h4>
        <h5> {passengers} </h5>
        <h5> {vehicleClass} </h5>
      </article>
    )
  }

  return (
    <div className='card'>
    {PickCards(props)}
    </div>
  )
}

export default Card;
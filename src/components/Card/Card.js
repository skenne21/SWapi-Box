import React from 'react';

const Card = (props) => {
  const planetPeepsCards = (props) => {
    if(props.climate) {
      
    }
  }

  const vechilesCards = (props) => {
    console.log(props)
  }

  return (
    <div>
    {
      props.population ? planetPeepsCards(props) : vechilesCards(props)
    }
    </div>
  )
}

export default Card;
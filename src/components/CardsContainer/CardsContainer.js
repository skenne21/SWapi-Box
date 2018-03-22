import React from 'react';
import PropType from 'prop-types'
import Card from '../Card/Card.js';
import './CardsContainer.js';

const CardsContainer = ({cards}) => {
  const createCards = cards.map(card => <Card {...card} key={card.name}/>)
  return (
    <div className='CardsContainer'>
      {createCards}
    </div>
  )
}

CardsContainer.propTypes = {
  cards: PropType.array.isRequired
}

export default CardsContainer;
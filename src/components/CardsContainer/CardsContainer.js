import React from 'react';
import Card from '../Card/Card.js';

const CardsContainer = ({cards}) => {
  const allCards = cards.map(card => <Card {...card} key={card.name}/>)
  return (
    <div className='CardsContainer'>
      {allCards}
    </div>
  )
}

export default CardsContainer;
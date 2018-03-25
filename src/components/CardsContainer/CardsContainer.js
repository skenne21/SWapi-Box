import React from 'react';
import PropType from 'prop-types';
import Card from '../Card/Card.js';
import './CardsContainer.js';

const CardsContainer = (props) => {
  const {
    cards,
    toggleFavorites 
  } = props;

  const createCards = cards.map((card, index) => 
    <Card
      className={card.class}  
      key={card.class + index} 
      toggleFavorites={toggleFavorites}
      card={card}
    />);

  return (
    <div className='CardsContainer'> 
      {createCards}
    </div>
  );
};

CardsContainer.propTypes = {
  cards: PropType.array.isRequired, 
  toggleFavorites: PropType.func
};

export default CardsContainer;
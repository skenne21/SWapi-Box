import React from 'react';
import PropTypes from 'prop-types';
import ScrollText from '../ScrollText/ScrollText.js';
import CardsContainer from '../CardsContainer/CardsContainer.js';
import './Main.css'

const Main = ({film, cards, toggleFavorites}) => {
  return (
    <main> 
    {
      cards.length ? 
      <CardsContainer 
        cards={cards}
        toggleFavorites={toggleFavorites} 
      />
      :
      <ScrollText film={film} />
    }
    </main>
  
  )
}

Main.propTypes = {
  film: PropTypes.object,
  cards: PropTypes.array.isRequired,
  toggleFavorites: PropTypes.func.isRequired,
}

export default Main;


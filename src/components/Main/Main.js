import React from 'react';
import PropTypes from 'prop-types';
import ScrollText from '../ScrollText/ScrollText.js';
import CardsContainer from '../CardsContainer/CardsContainer.js';
import './Main.css'

const Main = ({film, cards}) => {
  return (
    <main> 
    {
      cards.length ? 
      <CardsContainer cards={cards} />
      :
      <ScrollText film={film} />
    }
    </main>
  
  )
}

export default Main;

Main.propTypes = {
  film: PropTypes.object.isRequired
}
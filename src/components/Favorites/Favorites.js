import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.js';

const Favorites = ({favorites, addFavorites, card}) => {
  const navButton = () => {
    return(
      <div>
        <Button
          name='View Favorites'
        />
        <p>{favorites.length}</p>
      </div>
    )
  }

  return (
    <div className='Favorites'>
      {navButton()}
      
    </div>
  ) 
}

export default Favorites;

Favorites.propTypes = {
  favorites: PropTypes.array
}
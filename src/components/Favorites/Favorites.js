import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.js';
// import Card from '../Card/Card.js';

const Favorites = ({favorites, showFavorites}) => {
  const navButton = () => {
    return(
      <div>
        <Button
          name={'View Favorites'}
          controlFunc={showFavorites}
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

Favorites.propTypes = {
  favorites: PropTypes.array
}

export default Favorites;


import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.js';
import './Favorites.css';


const Favorites = ({favorites, showFavorites}) => {
  const navButton = () => {
    return (
      <div className='Favs'>
        <Button
          className='favs-button'
          name={'View Favorites'}
          controlFunc={showFavorites}
        />
        <p className='number'>{favorites.length}</p>
      </div>
    );
  };

  return (
    <div className='Favorites'>
      {navButton()}
    </div>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.array,
  showFavorites: PropTypes.func
};

export default Favorites;


import React from 'react';
import PropTypes from 'prop-types';
import Favorites from '../Favorites/Favorites.js';
import './Header.css';

const Header = ({favorites, showFavorites}) => {
  return (
    <header className='header'>
      <h1> Welcome to SWapi-Box</h1>
      <h3>Choose A Button To See Star Wars Information</h3>
      <Favorites 
        favorites={favorites}
        showFavorites={showFavorites}
      />
    </header>
  );
};

Header.propTypes = {
  favorites: PropTypes.array.isRequired,
  showFavorites: PropTypes.func
};

export default Header;


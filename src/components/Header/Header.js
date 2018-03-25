import React from 'react';
import PropTypes from 'prop-types';
import Favorites from '../Favorites/Favorites.js';

const Header = ({favorites, showFavorites}) => {
  return (
    <header>
      <h1> Welcome to SWapi-Box</h1>
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


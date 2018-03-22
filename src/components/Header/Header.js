import React from 'react';
import PropTypes from 'prop-types';
import Favorites from '../Favorites/Favorites.js';

const Header = ({favorites}) => {
  return (
    <header>
      <h1> Welcome to SWapi-Box</h1>
      <Favorites 
        favorites={favorites}
      />
    </header>

  )
}

Header.propTypes = {
  favorites: PropTypes.array.isRequired
}

export default Header;


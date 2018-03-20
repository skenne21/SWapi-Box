import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.js';

const Favorites = ({favorites}) => {
  return(
    <div className='Favorites'>
      <Button 
        name={'Veiw Favorites'}
      />
      <p>{favorites.length}</p>
    </div>
  )
}

export default Favorites;

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired
}
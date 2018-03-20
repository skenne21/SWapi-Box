import React from 'react';
import PropTypes from 'prop-types';

const Button = ({name}) => {
  return (
    <div>
      <button>{name}</button>  
    </div>
  )
}

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired
}
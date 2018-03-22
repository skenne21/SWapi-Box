import React from 'react';
import PropTypes from 'prop-types';

const Button = ({name, controlFunc}) => {
  return (
    <div>
      <button
        onClick={(() => { controlFunc(name)})}>{name}</button>  
    </div>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  controlFunc: PropTypes.func
}

export default Button;


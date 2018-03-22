import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({name, controlFunc, isActive}) => {

  const selected = () => {
    if(isActive === name) {
      return true;
    }
  }

  return (
    <div>
      <button
        className={selected() ? 'selected' : ''}
        onClick={(() => { controlFunc(name)})}>{name}</button>  
    </div>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  controlFunc: PropTypes.func, 
  isActive: PropTypes.string
}

export default Button;


import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({name, controlFunc, isActive, card = {}}) => {
  const selected = () => {
    if(isActive === name) {
      return true;
    }
    if(card.id !== undefined) {
      return true;
    }
  }

  return (
    <div>
      <button
        className={selected() ? 'selected' : ''}
        onClick={(() => { controlFunc(name, card)})}>{name}</button>  
    </div>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  controlFunc: PropTypes.func, 
  isActive: PropTypes.string, 
  card: PropTypes.object
}

export default Button;


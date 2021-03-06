import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.js';
import './Card.css';

const Card = (props) => {
  const { card, className, toggleFavorites} = props;

  const createCards = () => {
    const keys = Object.keys(card.info);
    const cardDetails = keys.map((detail, index) => {
      return (<h3 className='detail' key={index}>{card.info[detail]}</h3>);
    });
    return cardDetails;
  };

  return (
    <div className='card'>
      <article className={className}>
        <h2>{card.name}</h2>
        <Button
          className='favs-card'
          name={'❤︎'} 
          controlFunc={toggleFavorites}
          card={card}
        />
        {createCards(props)}
      </article>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  toggleFavorites: PropTypes.func,
  card: PropTypes.object 
};

export default Card;
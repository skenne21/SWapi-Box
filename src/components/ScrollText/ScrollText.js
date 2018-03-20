import React from 'react';
import PropTypes from 'prop-types';
import './ScrollText.css'

const ScrollText = ({film}) => {
  const { title, opening, release} = film;
  return (
    <section className="ScrollText">
      <div className='fade'> </div>
      <div className="main-container__text">
        <div className="moving-text-box">
          <header className="title">
            <p>{title}</p>
            <h1>{release}</h1>
          </header>
          <p className='opening-text'>{opening}</p>
        </div>
      </div>
    </section>

  )
}

export default ScrollText;

ScrollText.propTypes = {
  film:PropTypes.object.isRequired
}

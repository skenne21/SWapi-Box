import React from 'react';
import PropTypes from 'prop-types';
import ScrollText from '../ScrollText/ScrollText.js';
import './Main.css'

const Main = ({film}) => {
  return (
  {
    <main>
      <ScrollText film={film} />
    </main>
  }
  )
}

export default Main;

Main.propTypes = {
  film: PropTypes.object.isRequired
}
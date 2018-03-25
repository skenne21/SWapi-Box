import React from 'react';
import PropType from 'prop-types';
import Button from '../Button/Button.js';
import './Nav.css';

const Nav = ({controlFunc, isActive}) => {

  return (
    <div className='Nav'>
      <Button
        className={'Button'} 
        name={'People'}
        controlFunc={controlFunc}
        isActive={isActive}
      />
      <Button
        className={'Button'}
        name={'Planets'}
        controlFunc={controlFunc} 
        isActive={isActive}
      />
      <Button
        className={'Button'} 
        name={'Vehicles'}
        controlFunc={controlFunc}
        isActive={isActive}
      />
    </div>
  );
};

Nav.propTypes = {
  controlFunc: PropType.func,
  isActive: PropType.string
};

export default Nav;

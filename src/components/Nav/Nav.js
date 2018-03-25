import React from 'react';
import PropType from 'prop-types';
import Button from '../Button/Button.js';

const Nav = ({controlFunc, isActive}) => {

  return (
    <div>
      <Button 
        name={'People'}
        controlFunc={controlFunc}
        isActive={isActive}
      />
      <Button
        name={'Planets'}
        controlFunc={controlFunc} 
        isActive={isActive}
      />
      <Button 
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

import React from 'react';
import PropType from 'prop-types';
import Button from '../Button/Button.js';

const Nav = ({controlFunc}) => {
  return(
    <div>
      <Button 
        name={'People'}
        controlFunc={controlFunc}
      />
      <Button
        name={'Planets'}
        controlFunc={controlFunc} 
      />
      <Button 
        name={'Vehicles'}
        controlFunc={controlFunc}
      />
    </div>
  )

}

Nav.PropType = {
  controlFunc: PropType.func.isRequired
}

export default Nav;

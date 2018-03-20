import React from 'react';
import Button from '../Button/Button.js';

const Nav = () => {
  return(
    <div>
      <Button 
        name={'People'}
      />
      <Button
        name={'Planets'} 
      />
      <Button 
        name={'Vehicles'}
      />
    </div>
  )

}

export default Nav;

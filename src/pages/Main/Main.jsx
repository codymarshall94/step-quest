import React from 'react';
import MenuOptions from '../../components/MenuOptions';
import StepCount from '../../components/StepCount';
import './main.css';

function Main() {
  return (
    <div className='main-container'>
        <StepCount />
        <MenuOptions />
    </div>
  )
}

export default Main
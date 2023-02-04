import React from 'react';
import MenuOptions from '../../components/MenuOptions';
import StepCount from '../../components/StepCount';
import './main.css';

function Main({ user }) {
  const { stepPoints } = user;
  return (
    <div className='main-container'>
        <StepCount points={stepPoints}/>
        <MenuOptions />
    </div>
  )
}

export default Main
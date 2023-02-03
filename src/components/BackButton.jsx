import React from 'react'
import { Link } from 'react-router-dom'

function BackButton() {
  return (
    <Link to="/main"><button className='game-font-sub back-btn'>Back</button></Link>
  )
}

export default BackButton
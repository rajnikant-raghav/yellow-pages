import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <Link to={'/adduser'}><button>AddUser</button></Link>
    </div>
  )
}

export default Home

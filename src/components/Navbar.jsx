import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <h2>Yellow <span>Pages</span></h2>
        <div>
            <Link to="/adduser"><button>Add User</button></Link>
            <Link to="/retrive"><button>Retrive User</button></Link>
        </div>
    </nav>
  )
}

export default Navbar

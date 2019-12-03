import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav id="menu">
        <Link to="/users">Users</Link>
        <Link to="/tasks">Tasks</Link>
      </nav>
    </header>
  )
}

export default Navbar

import React from 'react'
import "./Navbar.css"

const Navbar = ({ searchfield }) => {
  return (
    <div className="navbar">
        <h1>ROBO<span>FRIENDS</span></h1>
        <input type="search" name="search" id="search" placeholder='Search For Friends' onChange={searchfield} />
    </div>
  )
}

export default Navbar
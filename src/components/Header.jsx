import React from 'react'
import "../assets/Header.css"


const Header = () => {
  return (
    <div class="header">
      <div class="logo">
        <h1>LOGO</h1>
      </div>
      <div class="link">
        <ul>
          <li><a href="HOME">Home</a></li>
          <li><a href="About us">Movies</a></li>
          <li><a href="Contact">Sports</a></li>
          <li><a href="./Aboutus.jsx">AboutUs</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header

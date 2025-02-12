import React from 'react'
import { Link } from 'react-router-dom'

const HotstarMovies = () => {
  return (
    <div>
      <div style={{textAlign:"center",height:"200px",backgroundColor:"royalblue"}}>
        <h1>Hotstar Movie</h1>
        <ul>
          <li><Link to="/play/moneyheist">MoneyHeist</Link></li>
          <li><Link to="/play/100090">India-ENG ODI</Link></li>
          <li><Link to="/play/">Ok</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default HotstarMovies

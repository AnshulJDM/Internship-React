import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import HotstarHome from './components/hotstar/HotstarHome'
import HotstarWelcome from './components/hotstar/HotstarWelcome'
import HotstarMovies from './components/hotstar/HotstarMovies'
import Play from './components/hotstar/Play'
import HotstarError from './components/hotstar/HotstarError'



function App() {
  
  

  return (
    <div>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<HotstarWelcome/>}></Route>
      <Route path="/home" element={<HotstarHome/>}></Route>
      <Route path="/movies" element={<HotstarMovies/>}></Route>
      <Route path="/play/:id" element = {<Play/>}></Route>
      <Route path="/play" element={<Play/>}></Route>
      <Route path="/*" element={<HotstarError/>}></Route>
    </Routes>
    </div>
  )
}

export default App

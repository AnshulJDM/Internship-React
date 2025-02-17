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
import FormDemo1 from './components/Form/FormDemo1'
import FormDemo2 from './components/Form/FormDemo2'
import FormDemo3 from './components/Form/FormDemo3'
import FormDemo4 from './components/Form/FormDemo4'
import { FormDemo5 } from './components/Form/FormDemo5'
import { LoginForm } from './components/Form/LoginForm'
import FormDemo7 from './components/Form/FormDemo7'
// import LoginForm1 from './components/Form/LoginForm1'
import { Signupform } from './components/Form/Signupform'
// import { FormDemo6 } from './components/Form/FormDemo6'



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
      <Route path='/formdemo1' element={<FormDemo1/>}></Route>
      <Route path='/formdemo2' element={<FormDemo2/>}></Route>
      <Route path='/formdemo3' element={<FormDemo3/>}></Route>
      <Route path='/formdemo4' element={<FormDemo4/>}></Route>
      <Route path='/formdemo5' element={<FormDemo5/>}></Route>
      {/* <Route path='formdemo6' element={<FormDemo6/>}></Route> */}
      <Route path='/loginform' element={<LoginForm/>}></Route>
      {/* <Route path='/loginform1' element={<LoginForm1/>}></Route> */}
      <Route path='signup' element={<Signupform/>}></Route>
      <Route path='/formdemo7' element={<FormDemo7/>}></Route>
      <Route path="/*" element={<HotstarError/>}></Route>
    </Routes>
    </div>
  )
}

export default App

import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={LogIn} />
        <Route exact path="/SignUp" Component={SignUp} />
      </Routes>
    </div>
  )
}

export default App

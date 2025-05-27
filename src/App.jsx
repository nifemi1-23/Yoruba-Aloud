import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import LogIn from './components/LogIn'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={LogIn} />
        {/* <Route exact path="/signup" Component={SignUp} /> */}
      </Routes>
    </div>
  )
}

export default App

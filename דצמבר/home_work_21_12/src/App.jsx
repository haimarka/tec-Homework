import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Level1 from './components/Level1'
import LogIn from './components/LogIn'
import ValidationLogIn from './components/ValidationLogIn'
import LogInDisable from './components/LogInDisable'

function App() {
  return (
    <div className="App">
        {/* <Level1/> */}
        {/* <LogIn/> */}
        {/* <ValidationLogIn/> */}
        <LogInDisable/>
    </div>
  )
}

export default App

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import YourName from './pages/yourName'
import Name from './pages/Name'
import ThreeCounters from './pages/ThreeCounters'
import Register from './pages/register'

function App() {
  return (
    <div className="App">
      {/* <YourName/> */}
      {/* <Name Name="haim"/> */}
      {/* <ThreeCounters/> */}
      <Register/>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import MEMORY_GAME3 from './pages/MEMORY_GAME'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>Memory game:</h2>
      <MEMORY_GAME3/>
    </div>
  )
}

export default App

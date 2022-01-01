import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Data from './components/Data'
import Preformance from './components/preformance'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>react</h1>
      {/* <Data/> */}
      <Preformance/>
    </div>
  )
}

export default App

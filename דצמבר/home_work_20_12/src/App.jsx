import { useState } from 'react'
import './App.css'
import Clock from './components/Clock'
import Counter from './components/Counter'
import ShowClick from './components/ShowClick'
import ShowClickClass from './components/ShowClickClass'
import ShowClickHooks from './components/ShowClickHooks'

function App() {
  const [count, setCount] = useState(null)

  return (
    <div className="App" >
      <input type="number" onChange={(e)=>setCount(Number(e.target.value))} />
      <Counter sendVal={count}/>
      {/* <Clock/> */}
      {/* <ShowClick/> */}
      {/* <ShowClickHooks/> */}
      {/* <ShowClickClass/> */}
    </div>
  )
}

export default App

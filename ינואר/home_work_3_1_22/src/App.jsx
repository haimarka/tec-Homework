import { useState } from 'react'
import './App.css'
import {BrowserRouter, Switch, Link ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Authentication from './pages/Authentication'

function App() {
  const [auth, setAuth] = useState(null);
  const LOCAL_STORAGE = 'users_details'
  localStorage.setItem(LOCAL_STORAGE,JSON.stringify(auth))
  return (
    <BrowserRouter>
    <div className="App">
      <Link to='/'>Home</Link>
      {auth? "" :<Link to='/Register'>Register</Link>}
      {auth? "" :<Link to='/Login'>Login</Link>}
      {!auth? "" :<Link to='/Authentication'>Authentication</Link>}
      <Switch>
          <Route exact path='/' component={Home} />
          {auth? "" :<Route exact path='/Register' render={()=><Register setAuth={setAuth}/>} />}
          {auth? "" :<Route exact path='/Login' render={()=><Login setAuth={setAuth} />} />}
          {auth == null? "" :<Route exact path='/Authentication' render={()=><Authentication auth={auth}/>} />}
      </Switch>
        {auth?<h4 style={{color: 'green'}}>user is signed in</h4>:<h4 style={{color: 'black'}}>user is signed out</h4>}
        {auth?<button onClick={()=>setAuth(null)}>signOut</button>:''}<br/>
    </div>
    </BrowserRouter>
  )
}

export default App

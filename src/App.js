import React from 'react'
import Routes from './Routes'
import NavBar from './NavBar'
import {Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <div>
    <NavBar />
    <Route exact path='/'>
      <Redirect to='/projects'/>
    </Route>
    <Routes />
    </div>
  )
}

export default App
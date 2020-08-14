import React from 'react'
import Routes from './Routes'
import NavBar from './NavBar'

function App(props) {
  return (
    <div>
    {/* Header */}
    <NavBar />
    <Routes />
    </div>
    
  )
}

export default App
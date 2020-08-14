import React from 'react'
import Routes from './Routes'
import NavBar from './NavBar'

const styles={
  main: {
    display: 'flex',
    flexDirection: 'row'
  }
}

function App(props) {
  return (
    <div style={styles.main}>
    {/* Header */}
    <NavBar />
    <Routes />
    </div>
    
  )
}

export default App
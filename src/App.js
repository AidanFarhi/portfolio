import React from 'react';
import Sidebar from './components/Sidebar'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      rendering: 'projects'
    }
  }

  switchPage = (str) => {
    const newPage = str
    this.setState({
      rendering: newPage
    })
  }
  
  render() {
    const page = this.state.rendering
    console.log(page)
    return (
      <div>
        <Sidebar onClick={this.switchPage}/>
        {page === 'projects' ? <Projects /> : null}
        {page === 'skills' ? <Skills /> : null}
        {page === 'about' ? <About /> : null}
        {page === 'contact' ? <Contact /> : null}
      </div>
    )
  }
}


export default App;

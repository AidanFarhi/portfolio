import React from 'react'
import {Link} from 'react-router-dom'
import face from './images/portfolio.jpg'
import './styles/NavBar.css'


function NavBar() {
    return(
        <div className='nav-bar'>
            <img id='face' src={face} alt='Aidan'/>
            <p id='name'>Aidan Farhi</p>
            <p id='title'>Full-Stack Web Developer</p>
            <Link className='link' to='/projects'>Projects</Link>
            <Link className= 'link' to='/resume'>Resume</Link>
            <Link className='link' to='/about'>About</Link>
            <Link className= 'link' to='/contact'>Contact</Link>
            <p id='footer'>Site powered by <span style={{color: 'lightblue'}}>React</span></p>
        </div>
    )
}

export default NavBar

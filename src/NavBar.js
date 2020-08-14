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
            <Link className= 'link' to='/skills'>Skills</Link>
        </div>
    )
}

export default NavBar

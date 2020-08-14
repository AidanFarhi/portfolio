import React from 'react'
import {Link} from 'react-router-dom'
import face from './images/portfolio.jpg'
import './styles/NavBar.css'


function NavBar() {
    return(
        <div className='nav-bar'>
            <img id='face' src={face} alt='Aidan'/>
            <Link className='link' to='/home'>home</Link>
            <Link className= 'link' to='/skills'>skills</Link>
        </div>
    )
}

export default NavBar

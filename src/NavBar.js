import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import face from './images/portfolio.jpg'
import './styles/NavBar.css'


function NavBar() {

    const [state, setState] = useState({
        currentPage: ''
    })

    const handleClick = (page) => {
        setState({ currentPage: page })
        console.log(state)
    }

    return(
        <div className='nav-bar'>
            <img id='face' src={face} alt='Aidan'/>
            <p id='name'>Aidan Farhi</p>
            <p id='title'>Full-Stack Web Developer</p>
            <Link onClick={()=> handleClick('projects')} className='link' to='/projects'>Projects</Link>
            <Link onClick={()=> handleClick('resume')} className='link' to='/resume'>Resume</Link>
            <Link onClick={()=> handleClick('about')} className='link' to='/about'>About</Link>
            <Link onClick={()=> handleClick('contact')} className='link' to='/contact'>Contact</Link>
            <p id='footer'>Site powered by <span style={{color: 'lightblue'}}>React</span></p>
        </div>
    )
}

export default NavBar

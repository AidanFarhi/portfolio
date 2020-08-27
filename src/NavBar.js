import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import face3 from './images/aidan-face-3.png'
import menu from './images/menu.png'
import './styles/NavBar.css'


function NavBar() {

    const [state, setState] = useState({
        currentPage: ''
    })

    const handleClick = (page) => {
        setState({ currentPage: page })
    }

    useEffect(()=> {
        setState({
            currentPage: window.location.pathname.slice(1)
        })
    },[])

    return(
        <div className='nav-bar'>
            <img id='menu' src={menu} alt='menu'/>
            <input type='checkbox' />
            <img id='face' src={face3} alt='Aidan'/>
            <p id='name'>Aidan Farhi</p>
            <p id='title'>Full-Stack Web Developer</p>
            <div id='toggle'>
                <div id='links'>
                    <Link onClick={()=> handleClick('projects')} 
                        className={state.currentPage === 'projects' ? 'link selected' : 'link'}
                        to='/projects'>
                        Projects
                    </Link>
                    <Link onClick={()=> handleClick('resume')} 
                        className={state.currentPage === 'resume' ? 'link selected' : 'link'} 
                        to='/resume'
                        id='bottom-link'>
                        Resume
                    </Link>
                    <Link onClick={()=> handleClick('about')} 
                        className={state.currentPage === 'about' ? 'link selected' : 'link'} 
                        to='/about'>
                        About
                    </Link>
                </div>  
                <div id='contact-div'>
                    <h3 id='contact-header'>Contact</h3>
                    <p><a href='mailto:aidanmcfarhi@gmail.com' target='_blank' rel="noopener noreferrer">aidanmcfarhi@gmail.com</a></p>
                    <p>646-500-1595</p>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar

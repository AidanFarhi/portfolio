import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import face from './images/portfolio.jpg'
import face2 from './images/aidan-face-2.png'
import './styles/NavBar.css'


function NavBar() {

    const [state, setState] = useState({
        currentPage: ''
    })

    const handleClick = (page) => {
        setState({ currentPage: page })
    }

    // useEffect(()=> {
    //     this.setState({

    //     })
    // })

    return(
        <div className='nav-bar'>
            <img id='face' src={face2} alt='Aidan'/>
            <p id='name'>Aidan Farhi</p>
            <p id='title'>Full-Stack Web Developer</p>
            <Link onClick={()=> handleClick('projects')} 
                className={state.currentPage === 'projects' ? 'link selected' : 'link'}
                to='/projects'>
                Projects
            </Link>
            <Link onClick={()=> handleClick('resume')} 
                className={state.currentPage === 'resume' ? 'link selected' : 'link'} 
                to='/resume'>
                Resume
            </Link>
            <Link onClick={()=> handleClick('about')} 
                className={state.currentPage === 'about' ? 'link selected' : 'link'} 
                to='/about'>
                About
            </Link>
            {/* <Link onClick={()=> handleClick('contact')} 
                    className='link' 
                    to='/contact'>
                    Contact
                </Link> */}
            <p id='footer'>Site powered by <span style={{color: 'lightblue'}}>React</span></p>
        </div>
    )
}

export default NavBar

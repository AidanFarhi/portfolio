import React from 'react'
import {Link} from 'react-router-dom'
import face from './portfolio.jpg'

const styles = {
    navItems: {
        display: 'flex',
        flexDirection: 'column'
    },
    image: {
        height: '10%',
        width: '10%'
    }

}

function NavBar() {
    return(
        <div>
            <img style={styles.image} src={face} alt='A piture of Aidan'/>
            <div style={styles.navItems} className='nav-bar'>
                <Link to='/home'>home</Link>
                <Link to='/skills'>skills</Link>
            </div>
        </div>
        
    )
}

export default NavBar

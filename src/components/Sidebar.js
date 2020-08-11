import React from 'react'

class Sidebar extends React.Component {
    constructor(props) {
        super(props) 
            this.state = {
                onClick: props.onClick
            }
        
    }
    render() {
        return (
            <div className='sidebar'>
                <div>My Face Here</div>
                <ul>
                    <li><button onClick={()=> this.state.onClick('projects')}>Projects</button></li>
                    <li><button onClick={()=> this.state.onClick('skills')}>Skills</button></li>
                    <li><button onClick={()=> this.state.onClick('about')}>About</button></li>
                    <li><button onClick={()=> this.state.onClick('contact')}>Contact</button></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar

import React from 'react'
import './cmp-styles/Projects.css'
// import sample from './logo192.png'
import ttt from './project-images/tic-tac-toe.png'
import gol from './project-images/gol.png'
import todo from './project-images/todo.png'
import reactIcon from './icons/react.jpeg'
import htmlIcon from './icons/html.png'
import jsIcon from './icons/js.png'
// import nodeIcon from './icons/node.png' 
import cssIcon from './icons/css.jpg'

export default function Projects() {
    return (
        <div className='projects-main-div'>
            <h1 id='project-header'>Projects</h1>
            <div className='project-item'>
                <div className='description'>
                    <h3>Tic-Tac-Toe</h3>
                    <p>Tic-Tac-Toe built in React-Native. Click to play.</p>
                </div>
                <a href='https://snack.expo.io/@aidanfarhi/tic-tac-toe' target='_blank' rel="noopener noreferrer">
                <img className='project-image'alt='test' src={ttt}/>
                </a>
                <div className='icons'>
                    <img alt='icon' src={reactIcon}/>
                </div>
            </div>
            <div className='project-item'>
            <div className='description'>
                    <h3>ToDo.React</h3>
                    <p>A simple ToDo list app built with React</p>
                </div>
                <img className='project-image' alt='test' src={todo}/>
                <div className='icons'>
                    <img alt='icon' src={reactIcon}/>
                    <img alt='icon' src={cssIcon}/>
                    <img alt='icon' src={jsIcon}/>
                </div>
            </div>
            <div className='project-item'>
            <div className='description'>
                    <h3>Game of Life</h3>
                    <p>The canonical Game of Life built with Vanilla Javascript</p>
                </div>
                <img className='project-image' alt='test' src={gol}/>
                <div className='icons'>
                    <img alt='icon' src={htmlIcon}/>
                    <img alt='icon' src={cssIcon}/>
                    <img alt='icon' src={jsIcon}/>
                </div>
            </div>
        </div>
    )
}
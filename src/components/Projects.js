import React from 'react'
import './cmp-styles/Projects.css'
import sample from './logo192.png'
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
                    <p>The classic game of tic-tac-toe built in React-Native</p>
                </div>
                <img className='project-image'alt='test' src={ttt}/>
                <div className='icons'>
                    <img alt='icon' src={reactIcon}/>
                </div>
            </div>
            <div className='project-item'>
            <div className='description'>
                    <h3>ToDo.React</h3>
                    <p>A simple ToDo list app bult in React</p>
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
                    <p>The canonical Game of Life built in Vanilla Javascript</p>
                </div>
                <img className='project-image' alt='test' src={gol}/>
                <div className='icons'>
                    <img alt='icon' src={htmlIcon}/>
                    <img alt='icon' src={cssIcon}/>
                    <img alt='icon' src={jsIcon}/>
                </div>
            </div>
            <div className='project-item'>
                <p>project description goes here</p>
                <img className='project-image' alt='test' src={sample}/>
                <div className='icons'></div>
            </div>
        </div>
    )
}
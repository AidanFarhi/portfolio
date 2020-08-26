import React from 'react'
import './cmp-styles/Projects.css'
import wikiStack from './project-images/wikiStack.png'
import juke from './project-images/juke.png'
import ttt from './project-images/tic-tac-toe.png'
import gol from './project-images/gol.png'
import reactIcon from './icons/react.jpeg'
import htmlIcon from './icons/html.png'
import jsIcon from './icons/js.png'
import nodeIcon from './icons/node.png' 
import cssIcon from './icons/css.jpg'
import postG from './icons/postgresIcon.png'

export default function Projects() {
    return (
        <div className='projects-main-div'>
            <h1 id='project-header'>Projects</h1>
            <div className='project-item'>
                <div className='description'>
                    <h3>Juke</h3>
                    <p>This is an audio player that lets the user pause, play, and switch songs or albums at will.</p>
                </div>
                <img className='project-image'alt='test' src={juke}/>
                <div className='icons'>
                    <img alt='icon' src={jsIcon}/>
                    <img alt='icon' src={nodeIcon}/>
                    <img alt='icon' src={postG}/>
                </div>
            </div>
            <div className='project-item'>
                <div className='description'>
                    <h3>QCCpedia</h3>
                    <p>A full-stack application where users can post, edit, delete and search wikipedia-style content.</p>
                </div>
                <img className='project-image'alt='test' src={wikiStack}/>
                <div className='icons'>
                    <img alt='icon' src={jsIcon}/>
                    <img alt='icon' src={nodeIcon}/>
                    <img alt='icon' src={postG}/>
                </div>
            </div>
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
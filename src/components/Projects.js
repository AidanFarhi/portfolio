import React from 'react'
import './cmp-styles/Projects.css'

import sudoku from './project-images/sudoku.png'
import amazon from './project-images/amazon-analyzer.png'
import reactIcon from './icons/react.jpeg'
import nodeIcon from './icons/node.png' 
import pythonIcon from './icons/python.png'
import flaskIcon from './icons/flask.png'
// import postG from './icons/postgresIcon.png'
// import expressIcon from './icons/express.jpeg'
import js from './icons/js.png'

export default function Projects() {
    return (
        <div className='projects-main-div'>
            <h1 id='project-header'>Projects</h1>
            <div className='project-item'>
                <div className='description'>
                    <h3>Amazon Product Analyzer</h3>
                    <p>
                        This is a web application that takes in an amazon product url and
                        calculates a score.
                    </p>
                </div>
                <a href='https://github.com/AidanFarhi/Product-Sentiment/' target='_blank' rel="noopener noreferrer">
                    <img className='project-image'alt='test' src={amazon}/>
                </a>
                <div className='icons'>
                    <img alt='icon' src={reactIcon}/>
                    <img alt='icon' src={pythonIcon}/>
                    <img alt='icon' src={flaskIcon}/>
                </div>
            </div>
            <div className='project-item'>
                <div className='description'>
                    <h3>Sudoku</h3>
                    <p>The classic game of Sudoku also known as the samurai of puzzles.
                    </p>
                </div>
                <a href='https://secure-bayou-08254.herokuapp.com/' target='_blank' rel="noopener noreferrer">
                    <img className='project-image'alt='test' src={sudoku}/>
                </a>
                <div className='icons'>
                    <img alt='icon' src={reactIcon}/>
                    <img alt='icon' src={nodeIcon}/>
                    <img alt='icon' src={js}/>
                </div>
                <div className='description'>
                    <h3>Features</h3>
                    <ul id='features'>
                        <li>Multiple game difficulties</li>
                        <li>Minimialist style. No hints or number counts.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
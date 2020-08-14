import React from 'react'
import './cmp-styles/Projects.css'
import sample from './logo192.png'

export default function Projects() {
    return (
        <div className='projects-main-div'>
            <h1 id='project-header'>Projects</h1>
            <div className='project-item'>
                <p>project description goes here</p>
                <img alt='test' src={sample}/>
            </div>
            <div className='project-item'>
            <p>project description goes here</p>
                <img alt='test' src={sample}/>
            </div>
            <div className='project-item'>
            <p>project description goes here</p>
                <img alt='test' src={sample}/>
            </div>
            <div className='project-item'>
            <p>project description goes here</p>
                <img alt='test' src={sample}/>
            </div>
        </div>
    )
}
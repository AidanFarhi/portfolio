
import React from 'react'
import './cmp-styles/About.css'

export default function About() {
    return (
        <div className='about-main-div'>
            <h1 id='about-me-header'>About Me</h1>
            <div id='about-me-div'>
                <p>
                    "I am a full-stack web developer with a passion for all things tech.
                    I live for the moment when a project is finally done, and I love 
                    working on a team that crosses the finish line together. I'm a firm
                    believer in lifelong learning, and understand that there is always
                    something new on the horizon to add to my toolbelt."
                </p>
            </div>
        </div>
    )
}
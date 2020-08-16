import React from 'react'
import './cmp-styles/Resume.css'

export default function Resume() {
    return (
        <div className='resume-main-div'>
            <h1 id='resume-header'>Resume</h1>
            <div id='resume'>
                <h2>Profile</h2>
                <p>
                    I am a full-stack web developer seeking full-time employment.
                    I have experience working on a team in a remote setting,
                    as well as working solo to meet project deadlines.

                </p>
                <h2>Skills</h2>
                
                <h4>Front-end</h4>
                <p>React | React-Native | HTML | CSS | JavaScript</p>
                <h4>Back-end</h4>
                <p>Node/Express | Flask | Python | PostgreSQL</p>
                <h4>Other</h4>
                <p>Heroku | Adminr</p>
                
                <h2>Education</h2>
                <h4>CUNY TechWorks (remote) - June-Sept. 2020</h4>
                <p>- Learned the foundations of building web and mobile applications</p>
                <p>- Developed algorithm solving expertise</p>
                <p>- Worked both individually and as a group to meet project deadlines</p>

                <h4>Harvard CS50 Web Programming with Python and Javascript (partially completed) - 2020</h4>
                <p>- Learned the basics of JavaScript, CSS, HTML, Python, PostgreSQL and Flask</p>
                <p>- Built one full-stack application</p>

                <h4>QCC Intro to Computer Programming - 2019</h4>
                <p>- Learned the basics of computer programming</p>
                <p>- Completed several projects using Python and Jupyter</p>

            </div>
        </div>
    )
}
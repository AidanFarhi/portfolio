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
                    I have experience working on and leading a team 
                    in a remote setting, as well as working solo to meet project deadlines.
                </p>
                <a href='https://github.com/AidanFarhi' target='_blank' rel="noopener noreferrer">Link to my github</a>
                <h2>Skills</h2>
                
                <h4>Front-end</h4>
                <p>React | JavaScript | HTML | CSS | </p>
                <h4>Back-end</h4>
                <p>Node | Express | PostgreSQL</p>
                <h4>Mobile</h4>
                <p>React-Native</p>
                
                <h2>Education</h2>
                <h4>CUNY TechWorks (remote) - June 2020 - present</h4>
                <p>- Currently leading a team to build a full-stack e-commerce application using GitHub for version control and Trello for task management.</p>
                <p>- Built several full-stack applications both solo and via pair programming.</p>
                <p>- Learned the foundations of building web and mobile applications using a variety of technology.</p>
                <p>- Developed algorithm solving expertise and collaborated with peers to solve problems.</p>

                <h4>Tech Support Fundamentals (Google) - July 2020 - present</h4>
                <p>- Learning the basics of computer assembly, OS installation, the Internet, and common problem solving methedologies.</p>

                <h4>Algorithms Part I (Princeton) - August 2020 - present</h4>
                <p>- Learning the essentials of algorithms and data structures, with emphasis on applications and scientific performance analysis of Java implementations.</p>
                <p>- Main focus: Data structures, sorting, and searching algorithms.</p>

                <h4>Web Programming with Python and Javascript (Harvard CS50) - April-July 2020</h4>
                <p>- Received an introduction to JavaScript, CSS, HTML, Python, PostgreSQL and Flask.</p>

                <h4>Intro to Computer Programming (Queensborough Community College) - 2019</h4>
                <p>- Learned the basics of computer programming.</p>
                <p>- Completed several projects using Python and Jupyter.</p>

            </div>
        </div>
    )
}
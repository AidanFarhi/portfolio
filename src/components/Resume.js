import React from 'react'
import './cmp-styles/Resume.css'

export default function Resume() {
    return (
        <div className='resume-main-div'>
            <h1 id='resume-header'>Resume</h1>
            <div id='resume'>
                <h2>Profile</h2>
                <p>
                I am a software engineer that strives to build efficient applications that are both intuitive and user-friendly. 
                I thrive in a team-oriented environment and fully embrace all the joys and challenges of building software. 
                I love diving deep into all areas of software engineering, and am looking to break into the feild as a full-stack engineer or
                a data engineer.
                </p>
                <a href='https://github.com/AidanFarhi' target='_blank' rel="noopener noreferrer">Link to my github</a>

                <h2>Skills</h2>
                <h4>Front-end</h4>
                <p>React | JavaScript | HTML | CSS </p>
                <h4>Back-end</h4>
                <p>Node | Express | PostgreSQL | Flask</p>
                <h4>Programming Languages</h4>
                <p>Python | JavaScript | Java | C++ | C</p>

                <h2>Education</h2>
                <h4>CUNY TechWorks Summer Bootcamp (remote) - June 2020 - September 2020</h4>
                <p>- Built a working knowledge of full-stack Web and Mobile development using JavaScript, React, 
                    PostgreSQL, Express, Node and React-Native as well as gaining algorithm solving expertise.
                </p>

                <h4>Algorithms and Data Structures in Python (Udemy Certification) - September 2020 - December 2020</h4>
                <p>- Learned and implemented essential data structures including, but not limited
                    to; linked lists, trees, heaps, graphs, stacks, queues, as well as the accompanying searching, 
                    sorting, path finding, and other algorithms in Python.
                </p>

                <h4>Intro to Computer Programming (Queensborough Community College) - 2019</h4>
                <p>- Developed a knowledge of Python and computer programming 
                    along with completing several projects working with PyCharm and Jupyter.
                </p>
                
                <h2>Experience</h2>
                <h4>Personal Projects - July 2020 - present</h4>
                <p>- Built several programs and projects ranging from: web-scraping, data pipelines, web applications,
                    image filters, and others.
                </p>
                <h4>CUNY TechWorks (remote) July 2020 - September 2020</h4>
                <p>- Led a team in building a full-stack e-commerce application 
                    using GitHub for version control and Trello for task management.
                </p>
                <p>- Learned the foundations of JavaScript and basic data types while working through
                    multiple algorithms and collaborated with peers to solve problems.</p>
                <p>- Learned the fundamentals of web-application and mobile-application development
                    using various modern technologies frameworks.
                </p>
            </div>
        </div>
    )
}
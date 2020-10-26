
import React from 'react'
import './cmp-styles/About.css'

export default function About() {
    return (
        <div className='about-main-div'>
            <h1 id='about-me-header'>About Me</h1>
            <div id='about-me-div'>
                <p>
                    "I am a software engineer that loves tinkering, building, and learning new things.
                    I believe software should be intuitive and enjoyable for the user and straightforward
                    as possible for the engineer.
                    I currently live in Brooklyn, NY, but am actively seeking employment and will happily
                    relocate."
                </p>
            </div>
        </div>
    )
}
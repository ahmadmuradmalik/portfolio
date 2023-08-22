import React from 'react'
import profileImage from './pic.jpeg';
import "./About.css"

function About() {
  return (
        <div className="about-me-container">
        <div className="profile-pic-container">
        <img src={profileImage} alt="Profile" className="profile-pic" />
        </div>
        <h1 className="about-me-header">About Me</h1>
        <div className="about-me-content">
        <p className="about-me-text">
            Hi guys this the about page, my name is AHmad murad Malik. I'm a recent graduate from UC Berkeley. I studied Applied Math, Computer science and Data science. I am specifically interested in machine learning and financial data science for jobs. Personal Academic interests are Complex Analysis and Numerical Analysis.
        </p>
        </div>
        </div>
  )
}

export default About;
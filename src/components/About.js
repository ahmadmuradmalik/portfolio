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
          HI im Ahmad. I recently graduated from UC Berkeley. I studied a mix of Math, Computer science and Data science. Personal Academic interests are Complex Analysis (how more people don't find this insanely cool, i will never get) and Numerical Analysis. I've recently been trying to pick up crochet to be able to make myself a cool ass beanie or scarf but im not being consistent enough with it. Also I am almost surely going to get a cat very soon. Avid Bob Dylan and Taylor Swift enthusiast. 
        </p>
        </div>
        </div>
  )
}

export default About;
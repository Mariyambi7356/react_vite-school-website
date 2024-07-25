import React from 'react'
import "./About.css";
import mari from '../../../assets/image/gggh.jpg'

export default function About() {
  return (
    <div>
     <div className="container">
      <div className="about-us-container">
        <div className="team-member">
          <h2>OUR TEAM</h2>
          <div className="member-card">
            <img src={mari} alt="images" className="member-image" />
            <h3 className="member-name">
              MARIYAMBI
            </h3>
            <p className='member-role'> FOUNDER & CEO</p>
          </div>

        </div>
        <div className="about-us-description">
          <h1 className="about-us-heading"> About us</h1>
          <p> With a passion for empowering leaners of all ages,our mission is to
            make education accessible,engaging,and personalized through our
            cutting-edge educational technology platform.</p>
        </div>
      </div>
     </div>
    </div>
  )
}

import React from 'react';
import '../css/aboutme.css';
import headshot from '../img/headshot.png';

class AboutMe extends React.Component {

  render() {
    return(
      <section id="about-me">
        <div id="about-container">
          <h2> About Me </h2>
          <div id="about-image">
            <img id="profile" src={headshot} alt="headshot"/>
          </div>
          <div id="about-text">
            I'm a software engineer currently living in the Bay Area.
            I believe that great products are created through an engaging user experience.
            Whether it's a game or an application that provides impactful solutions, my passion
            lies in making those experiences engaging and memorable.       
          </div>
        </div>
      </section>
    )
  }
}

export default AboutMe;

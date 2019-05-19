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
            I'm a web developer currently living in the Bay Area.
            I love bringing a design to life and having users interact with it through the use of
            color, fonts, and code.
            Whether it's creating a site for a small business or personal portfolio, I'm all about creating a
            site that tells your story and your message.
          </div>
        </div>
      </section>
    )
  }
}

export default AboutMe;

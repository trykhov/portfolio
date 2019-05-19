import React from 'react';
import Navigation from './Navigation';
import '../css/resume.css';
import berkeley from '../img/berkeley-logo.png';

class Resume extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return(
      <section id="resume-page">
        <Navigation />
        <div style={{height: "80px"}}></div>
        <div id="content-info">
          <div id="my-name" className="resume-section">
            <h1> Try Khov </h1>
          </div>
          <div id="technical-skills" className="resume-section">
            <h2>Technical Skills</h2>
            <p>JavaScript, React, Python, Java, CSS, HTML, Node.js, Flask, Git, SQL</p>
          </div>
          <div id="experience" className="resume-section">
            <h2>Experience</h2>
            <div className="exp-box">
              <div className="first-line">
                <div className="company">
                  <a href={"http://g12transport.com"}>G-12 Transport</a>
                </div>
                <div className="duration">March 2019 - April 2019</div>
              </div>
              <div className="location">Los Angeles, CA</div>
              <div className="position">
                <em>Freelance Web Developer</em>
              </div>
              <div className="role">
                <ul>
                  <li>Created a full-stack website from scratch for a growing trucking company in order to establish an online presence.</li>
                  <li>Implemented the site’s core features using ​React​, ​Node.js​ and Sendgrid API that allows potential clients to send service requests to the business owner.</li>
                  <li>Built translation feature using ​Redux​ to dynamically convert all text on the site to multiple languages (i.e. English and Spanish).</li>
                  <li>Developed autocomplete functionality for location inputs using Google Map API.</li>
                </ul>
              </div>
            </div>
            <div className="exp-box">
              <div className="first-line">
                <div className="company">
                  <a href={'https://www.trilogyed.com/'}>Trilogy Education</a>
                </div>
                <div className="duration">December 2018 - Present</div>
              </div>
              <div className="location">Berkeley, CA</div>
              <div className="position">
                <em>Data Analytics & Software Teaching Assistant</em>
              </div>
              <div className="role">
                <ul>
                  <li>Trained students with little or no programming background to proficiency level in R, Python, SQL, HTML, CSS, and Javascript through course lessons and projects.</li>
                  <li>Planned numerous projects for students to apply their skills, taking large datasets and inserting them into a database while also creating web-dashboards to showcase the data on the frontend</li>
                </ul>
              </div>
            </div>
            <div className="exp-box">
              <div className="first-line">
                <div className="company">
                  <a href={'https://www.kiwicampus.com/'}>Kiwi Campus</a>
                </div>
                <div className="duration">June 2018 - December 2018</div>
              </div>
              <div className="location">​Berkeley, CA</div>
              <div className="position">
                <em>Software Engineering Intern</em>
              </div>
              <div className="role">
                <ul>
                  <li>Worked as a developer at Kiwi Campus, a Berkeley based startup focused on revolutionizing the food delivery industry with autonomous robots</li>
                  <li>Developed automation scripts in ​Python​ to clean and analyze data gathered from the company’s mobile app and delivery robots</li>
                  <li>Created an internal dashboard using ​Flask​ to visualize key company metrics</li>
                  <li>Successfully cemented partnerships with other delivery services such as Doordash and Snackpass using data to show why robots are more efficient than human couriers in terms of cost and time</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="education" className="resume-section">
            <h2>Education</h2>
            <div className="school">
              <div className="grad-info">
                <div className="symbol">
                  <img src={berkeley} alt="seal"/>
                  <h3>University of California, Berkeley</h3>
                </div>
                <div className="graduation">
                  <div className="duration">Graduated December 2017</div>
                </div>
              </div>
              <div className="degree">
                <a href={'https://rhetoric.berkeley.edu/'}>Bachelor's of Arts in Rhetoric</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Resume;

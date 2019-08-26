import React from 'react';
import Navigation from './Navigation';
import '../css/resume.css';
import berkeley from '../img/berkeley-logo.png';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-140490976-2');
ReactGA.pageview('/resume');

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
            <p>JavaScript, Python, React-Native, HTML, CSS, SaSS, React.js, Node.js, Git, SQL, RESTful APIs</p>
          </div>
          <div id="experience" className="resume-section">
            <h2>Experience</h2>
            <div className="exp-box">
              <div className="first-line">
                <div className="company">
                  <a href={'https://www.trilogyed.com/'}>Trilogy Education</a>
                </div>
                <div className="duration">December 2018 - June 2019</div>
              </div>
              <div className="location">Berkeley, CA</div>
              <div className="position">
                <em>Data Analytics & Software Bootcamp Teaching Assistant</em>
              </div>
              <div className="role">
                <ul>
                  <li>Mentored class of ~30 students where 47% of graduates transitioned into data & software-related roles within 3 months of completing the bootcamp</li>
                  <li>Accelerated student fluency in programming and data analytics using Python, JavaScript, and SQL upon completion of over 10 projects throughout a 6-month program</li>
                </ul>
              </div>
            </div>
            <div className="exp-box">
              <div className="first-line">
                <div className="company">
                  <a href={"http://g12transport.com"}>G-12 Transport</a>
                </div>
                <div className="duration">March 2019 - May 2019</div>
              </div>
              <div className="location">Los Angeles, CA</div>
              <div className="position">
                <em>Freelance Web Developer</em>
              </div>
              <div className="role">
                <ul>
                  <li>Established a growing trucking company’s online presence through implementation of full-stack website developed using React.js, Node.js, and Express</li>
                  <li>Increased client engagement by 23% after implementing Spanish translation feature using React-Redux</li>
                  <li>Introduced easy navigation and communication features between clients and company using RESTful APIs such as Google Maps and Sendgrid</li>
                </ul>
              </div>
            </div>
            <div className="exp-box">
              <div className="first-line">
                <div className="company">
                  <a href={'https://www.kiwicampus.com/'}>Kiwi Campus</a>
                </div>
                <div className="duration">May 2018 - December 2018</div>
              </div>
              <div className="location">​Berkeley, CA</div>
              <div className="position">
                <em>Contract Software Engineer</em>
              </div>
              <div className="role">
                <ul>
                  <li>Pioneered the first centralized data dashboard that kept track of KPIs and other performance metrics used by over 10 teams in the United States, Colombia, and China</li>
                  <li>Succeeded in helping to close a $1.9M investment deal using data visualizations, generated using Python and Plotly.py, to show outstanding company performance and growth</li>
                  <li>Reduced delivery times by 34% after Operations team redesigned its logistics system using insights from the organized data</li>
                  <li>Produced and coordinated a growing team of data analysts and software engineers to maintain and innovate the logistical component of the Product team</li>
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

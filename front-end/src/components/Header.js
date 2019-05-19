import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import js from '../img/js.png';
import html from '../img/html.png';
import css from '../img/css.png';
import java from '../img/java.jpg';
import node from '../img/node.png';
import react from '../img/react.png';
import python from '../img/python.png';
import '../css/header.css';

class Header extends React.Component {


  render() {
    return (
      <section id="header-container">
        <div id="header-content">
          <div className="banner">
            <span>Hi, I'm Try and I'm a</span>
            <h1>Web Developer</h1>
            <span>skilled in the following languages, frameworks, and libraries:</span>
            <div id="tech">
              <img id="tech-image" src={js} alt="js" title="javascript"/>
              <img id="tech-image" src={html} alt="html" title="html"/>
              <img id="tech-image" src={css} alt="css" title="css"/>
              <img id="tech-image" src={java} alt="java" title="java"/>
              <img id="tech-image" src={react} alt="react" title="react"/>
              <img id="tech-image" src={node} alt="nodejs" title="node.js"/>
              <img id="tech-image" src={python} alt="python" title="python"/>
            </div>
            <div id="more-info">
              <Link smooth to='/#portfolio'>
                <div>View Portfolio</div>
              </Link>
              <Link smooth to='/#contact'>
                <div>Hire Me</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Header;

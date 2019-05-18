import React from 'react';
import Navigation from './Navigation';
import '../css/emailSent.css';
import { Link } from "react-router-dom";

class EmailSent extends React.Component {
  render() {
    return(
      <div id="confirm">
        <Navigation />
        <div style={{height: "80px"}}></div>
        <div id="contain">
          <h2>Your message was sent! A confirmation email was sent to your email!</h2>
          <Link to='/'>
            <div id="home-button">
              Go Home
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default EmailSent;

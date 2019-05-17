import React from 'react';
import '../css/contact.css';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class Contact extends React.Component {

  renderInput = ({ input, label }) => {
    return <input className="client-input" {...input} placeholder={label}/>
  }

  renderTextArea = ({ label, input }) => {
    return <textarea placeholder={label} {...input} />
  }

  render() {
    return(
      <section id="contact">
        <div id="contact-container">
          <h2>Let's Connect</h2>
          <div id="hold-both">
            <div id="left-side">
              <form className="ui form" action='/send_email' method='post'>
                <div className="two fields client-info">
                  <div className="field">
                    <Field name="name" component={this.renderInput} label="Name" focus/>
                  </div>
                  <div className="field">
                    <Field name="email" component={this.renderInput} label="Email" />
                  </div>
                </div>
                <div id="client-message">
                  <Field name="message" component={this.renderTextArea} label="Message" />
                </div>
                <button className="ui primary button">Send</button>
              </form>
            </div>
            <div id="right-side">
              <div id="follow">
                <div id="status">
                  <h2> Currently looking for work! </h2>
                  <Link to='/resume'>
                    <div className="resume">View Resumé</div>
                  </Link>
                </div>
                <h2>Also look at my:</h2>
                <div id="social">
                  <a href={'https://www.linkedin.com/in/tckhov/'} target="blank">
                    <i className="fab fa-linkedin fa-3x"></i>
                  </a>
                  <a href={'https://github.com/trykhov'} target="blank">
                    <i className="fab fa-github fa-3x"></i>
                  </a>
                  <a href={'https://twitter.com/tryck_dev'} target="blank">
                    <i className="fab fa-twitter fa-3x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default reduxForm({
  form: 'contact'
})(Contact);

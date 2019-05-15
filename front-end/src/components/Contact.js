import React from 'react';
import '../css/contact.css';
import { Field, reduxForm } from 'redux-form';

class Contact extends React.Component {

  renderInput = ({ input, label }) => {
    return <input className="client-input" {...input} placeholder={label}/>
  }

  renderTextArea = ({ label }) => {
    return <textarea placeholder={label} />
  }

  render() {
    return(
      <section id="contact">
        <div id="contact-container">
          <h2>Let's Connect</h2>
            <div id="left-side">
              <form className="ui form">
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

            </div>
        </div>
      </section>
    )
  }
}

export default reduxForm({
  form: 'contact'
})(Contact);

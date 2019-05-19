// initiating libraries / files
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const keys = require('./auth');
const path = require('path');

// set up the app
const app = express();

// allows incoming text to be parsed
app.use(bodyParser.urlencoded({ extended: true }));

// open the build folder in front-end
app.use(express.static(path.join(__dirname, '../front-end', 'build')));


// for any path, go into the index.html file that's in the build, which is in the front-end folder
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../front-end', 'build', 'index.html'));
})

// extract api key
sgMail.setApiKey(keys.api);

app.post('/send_email', function(req, res) {
  const from = req.body.email;

  const msg = {
    to: req.body.email,
    from: keys.from,
    subject: 'Confirmation Email',
    text: 'Hi ' + req.body.name + ',',
    html: `<p>Hi ${req.body.name},</p>`
    + "<br>"
    + "<p>This is just a confirmation email saying thank you for reaching out. I'll get back to you as soon as possible. In the meantime, please don't hesitate to email me if you have any questions.</p>"
    + "<br>"
    + "<p>Best regards, <p>"
    + "<p>Try</p>"
  };

  const msgToMe = {
    to: keys.from,
    from: "delivery@trykhov.com",
    subject: 'Message from your site',
    html: `<p>${req.body.message}</p>`
  }
  // console.log(msg);
  // console.log(msgToMe);
  sgMail.send(msg);
  sgMail.send(msgToMe);
  res.redirect("/email-confirmation");
})


app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => console.log(`listening on port ${app.get("port")}`));

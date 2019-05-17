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
app.use(express.static(path.join(__dirname, 'front-end', 'build')));


// for any path, go into the index.html file that's in the build, which is in the front-end folder
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'front-end', 'build', 'index.html'));
})

// extract api key
sgMail.setApiKey(keys.api);

app.post('/send_email', function(req, res) {
  const from = req.body.email;

  const msg = {
    to: keys.to,
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  // sgMail.send(msg);

})



app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), () => console.log(`listening on port ${app.get("port")}`));

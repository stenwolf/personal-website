const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 8080;
const app = express();
const bodyParser = require('body-parser');
const sendEmail = express.Router();



app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.use('/sendEmail', sendEmail);

sendEmail.get('/', function(req,res){
  console.log('in send email');
})

sendEmail.post('/', function(req, res){
  console.log('req.body:', req.body);


  var smtpConfig = {
      //commented out sensitive info
    };

  var transporter = nodemailer.createTransport(smtpConfig);

  var text = 'From: ' + req.body.Name + '\nEmail/Phone: ' + req.body.Phone + '\n' + req.body.Message;

  var mailOptions = {
    from: 'anhphanho@gmail.com',
    to: 'anhphanho@gmail.com',
    subject: 'Email from website', // Subject line
    text: text //, // plaintext body
  };

  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
          res.json({response: 'error'});
      }else{
          console.log('Message sent: ' + info.response);
          res.json({response: info.response});
      };
  });


})

app.listen(port);
console.log('Server started')

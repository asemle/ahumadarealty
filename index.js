var express = require('express');
var nodeMailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));




app.post('/contact', function (req, res) {
  console.log(req.body.message)
  var mailOpts;
   //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
   var options = {
     service: 'gmail',
     auth: {
      //  user: process.env.user,
      //  pass: process.env.password
      user: process.env.user,
      pass: process.env.password
     }
   };
   var transporter = nodeMailer.createTransport(smtpTransport(options))
   //Mail options
   mailOpts = {
       from: req.body.email, //grab form data from the request body object
      //  to: 	"jahumada1@babson.edu",
       to: process.env.user,
       subject: req.body.name + " contacted you from ahumadarealty.com",
       html:'<p>'+ req.body.message + '</p> <br>' + '<b>' + req.body.email + '</b> <br> <b>' + req.body.phone + '</b>',
   };
   transporter.sendMail(mailOpts, function (error, response) {
       //Email not sent
       if (error) {
           console.log(error);
           res.send(false);
       } else {
         console.log('Message sent:' + response)
         res.send(true)
       }
       //Yay!! Email sent
   });
 });



module.exports = app;
app.listen(port, function() {
  console.log("Started server on port", port);
});

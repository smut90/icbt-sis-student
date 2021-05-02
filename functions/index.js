const admin = require('firebase-admin');
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const app = require('express')();
const cors = require('cors');
const { body, query } = require('express-validator');
const {
  performValidation,
} = require('./util');
app.use(cors());
require('dotenv').config();

admin.initializeApp();
const regionalFunctions = functions.region('asia-northeast1');

app.post('/v1/webhook',
  [
    performValidation(
      query("type")
        .notEmpty()
        .isIn(['MODULE', 'ASSIGNMENT'])
        .withMessage("type should be either MODULE or ASSIGNMENT"),
      body('code').notEmpty().withMessage("request body should contain code field"),
      body('name').notEmpty().withMessage("request body should contain name field")
    )
  ],
  async (req, res) => {
  const type = req.query.type;
  const requestBody = req.body;

  if (type === 'MODULE') {
    console.log('add new module', requestBody.code, requestBody.name);

  } else if (type === 'ASSIGNMENT') {
    console.log('add new assignment', requestBody.code, requestBody.name, requestBody.issued, requestBody.due, requestBody.status);
  }

  return res.status(200).send('ok');
});

app.post('/v1/notification',
  [
    performValidation(
      query("type")
        .notEmpty()
        .isIn(['EMAIL', 'SMS'])
        .withMessage("type should be either EMAIL or SMS"),
      body('subject').notEmpty().withMessage("request body should contain subject field"),
      body('payload').notEmpty().withMessage("request body should contain payload field"),
      body('html_snippet').notEmpty().withMessage("request body should contain recipient field"),
      body('attachment').notEmpty().withMessage("request body should contain attachment field"),
    )
  ],
  async (req, res) => {
    const type = req.query.type;
    const requestBody = req.body;

    if (type === 'EMAIL') {
      console.log('send new email', requestBody.subject, requestBody.html_snippet, requestBody.payload, requestBody.attachment);
    }

    return res.status(200).send('ok');
  });

exports.api = regionalFunctions.https.onRequest(app);

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: 'mkwferd@gmail.com',
    // clientId: process.env.CLIENT_ID,
    // clientSecret: process.env.CLIENT_SECRET,
    // refreshToken: process.env.REFRESH_TOKEN,
    accessToken: process.env.ACCESS_TOKEN,
    // expires: 3599
  }
});

exports.sendEmailNotification = functions.storage.object().onFinalize(async (object) => {
  const fileBucket = object.bucket; // The Storage bucket that contains the file.
  const filePath = object.name; // File path in the bucket.
  const contentType = object.contentType; // File content type.

  let mailOptions = {
    from: 'mkwferd@gmail.com',
    to: 'mkwferd@gmail.com',
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
  };

  console.log('FIle Uploaded', filePath, contentType, JSON.stringify(object));

  return transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });

});


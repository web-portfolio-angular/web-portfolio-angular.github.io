const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();
require('dotenv').config()

const {SENDER_EMAIL, SENDER_PASSWORD} = process.env;

exports.sendEmailNotification = functions.firestore.document('submissions/{docId}')
.onCreate((snap) => {
  const data = snap.data();

  let authData = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: SENDER_EMAIL,
      pass: SENDER_PASSWORD
    }
  })

  authData.sendMail({
    from: 'submissions@gmail.com',
    to: `${data.email}`,
    subject: 'Submission Info',
    text: `${data.email}`,
    html: `${data.email}`,
  }).then(() => console.log('The email is sent successfully')).catch(err => console.log(err));
});
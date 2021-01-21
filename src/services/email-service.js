'use strict'

//const config = require('../config');
//const sendgrid = require('sendgrid')(config.sendgridKey);

const config = require('../config');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.sendgridKey);


exports.send = async (to, subject, body) => {
    try {
        await sgMail.send({
                    to: to,
                    from: 'lincoln.junior.dev@outlook.com',
                    subject: subject,
                    text: 'and easy to do anywhere, even with Node.js',
                    html: body
        });
    } catch (error) {
        console.error(error);

        if(error.response) {
            console.error(error.response.body);
        }
    }    
}

// const msg = {
//   to: 'test@example.com',
//   from: 'test@example.com', // Use the email address or domain you verified above
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
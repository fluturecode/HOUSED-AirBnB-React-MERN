const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendWelcomeEmail = (email, firstName) => {
  const welcome = `<h1>Hello ${firstName}, we are so glad to have you join our family at Housed!</h1>`;
  try {
    sgMail.send({
      to: email,
      from: `${process.env.FROM_EMAIL}`,
      subject: 'Thanks for signing up.',
      // text: `Hi ${name}! Welcome to your task manager api.`
      html: welcome
    });
  } catch (e) {
    console.log(e);
  }
};
const sendCancellationEmail = (email, firstName) => {
  try {
    sgMail.send({
      to: email,
      from: `${process.env.FROM_EMAIL}`,
      subject: 'Sorry to see you go.',
      text: `Bye ${firstName}. If you change your mind let us know.`
    });
  } catch (e) {
    console.log(e);
  }
};
const forgotPasswordEmail = (email, token, password) => {
  const exampleHTMLEmail = `
  <a target="_blank" rel="noopener noreferrer" href="${process.env.APP_URL}/users/password/reset?email=${email}&token=${token}&password=${password}">Reset Password</a>
  `;
  try {
    sgMail.send({
      to: email,
      from: `${process.env.FROM_EMAIL}`,
      subject: 'Password Reset.',
      // text: `Hi ${name}! Please click the link below to reset your password.`
      html: exampleHTMLEmail
    });
  } catch (e) {
    console.log(e);
  }
};
module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
  forgotPasswordEmail
};

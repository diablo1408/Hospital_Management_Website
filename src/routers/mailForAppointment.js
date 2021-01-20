const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);

const getMailForDoctorsAppointment = (email, name) => {
    const msg = {
        to: email, 
        from: 'rajnishtiwarihrt@gmail.com',
        subject: 'Appointment Done',
        text: `${name}, your appointment has been successfully booked`
      }
      
      sgMail.send(msg)
}

const getMailForGeneralAppointment = (email, name) => {
    const msg = {
        to: email, 
        from: 'rajnishtiwarihrt@gmail.com',
        subject: 'Appointment Done',
        text: `${name}, your appointment has been successfully booked`
      }
      
      sgMail.send(msg)
}

module.exports = {
    getMailForDoctorsAppointment,
    getMailForGeneralAppointment
}
  


const express = require('express');
const router = express.Router();
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: "8e2e3c6b",
    apiSecret: "gRfNeOkHF20ZhIhn"
}, {debug: true})

const getSMSForDoctorsAppointment = (contactNo, name) => {
    const number = contactNo;
    const text = `${name}, your appointment has been booked`;
    nexmo.message.sendSms('Vonage APIs', number, text, (error, response) => {
        console.log("sms sent");
    });
}

const getSMSForGeneralAppointment = (contactNo, name) => {
    const number = contactNo;
    const text = `${name}, your appointment has been booked`;
    nexmo.message.sendSms('Vonage APIs', number, text, (error, response) => {
        console.log("sms sent");
    });
}

module.exports = {
    getSMSForDoctorsAppointment,
    getSMSForGeneralAppointment
}
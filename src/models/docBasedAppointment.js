const mongoose = require('mongoose');

const DoctorAppointment = mongoose.model('DoctorAppointment', {
        dAppointId : String,
        dAppointAvail : {
            type : Number,
            trim : true
        },
        patients : [String]
})

module.exports = DoctorAppointment
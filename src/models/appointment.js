const mongoose = require('mongoose');

const Appointment = mongoose.model('Appointment', {
    appointId : String, //this is will be hId+date
    appointmentsAvail : {
        type : Number,
        trim : true
    },
    patients : [String],
})

module.exports = Appointment 


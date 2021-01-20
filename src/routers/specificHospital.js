const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital');
const Appointment = require('../models/appointment');
const User = require('../models/user');
const Department = require('../models/department');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
const { getMailForGeneralAppointment } = require('./mailForAppointment');
const { getSMSForGeneralAppointment } = require('./smsForAppointment');

const datePick = () => {
    let arr = [];
    for(let i=0; i<7; i++){
        let ob = new Date();
        ob.setDate(ob.getDate() + i);
        arr.push(ob.toDateString());
        // console.log(ob.toDateString());
    }
    return arr;
}


const availabilityCount = (appointments, arr, hospId) => {
    const availabilityCountArr = [];
    let k = 0;
    //below for loop is to initialize the total availability count to 10 for every date
    for(let m = 0;m<arr.length;m++){
        availabilityCountArr[m] = 10;
    }
    for(let j=0;j<arr.length;j++) {
        const id = hospId+"+"+arr[j];
        for(let i=0;i<appointments.length ;i++){
            if(appointments[i].appointId === id){
                availabilityCountArr[j] = appointments[i].appointmentsAvail;
            }
        }
    }
    return availabilityCountArr;
}

router.get('/specificHospital/:id', ensureLoggedIn('/login'), (req, res) => {
    const hospId = req.params.id;
    let appointments = 0;
    let arrOfDates = datePick();
    let departments = [];
    Department.find({}).then((departmentsArray) => {
        departments = departmentsArray
    }).catch((error) => {
        console.log(error);
    })
    Appointment.find({}).then((appoints) => {
        appointments = appoints;
        Hospital.findOne({hId : hospId}).then((hospital) => {
            res.render('specificHospital',{
                departments,
                hospital,
                appointments,
                datesArr: arrOfDates,
                availabilityCountArr: availabilityCount(appointments, arrOfDates, hospId)
            })
        }).catch((err) => {
            console.log(err);
        })
    }).catch((err) => {
        console.log(err);
    })
    
})

router.post('/specificHospital/:id', (req, res, next) => {
    let date = req.body.date;
    let hId = req.params.id;
    let user = req.user;
    
    const appointId = hId+"+"+date;

    User.findById(user._id).then((user_) => {
        user_.hospAppointment.push(appointId);
        user_.save().then(() => {
            
        }).catch((err) => {
            return res.send(err)
        })
    }).catch((err) => {
        return res.send(err);
    })
    
    Appointment.findOne({appointId : appointId}).then((appoint) => {
        if(!appoint){

            const appointment = new Appointment({
                "appointId": appointId,
                "appointmentsAvail": 9,
                "patients" : [user._id]
            })
            appointment.save().then(()=>{
                getMailForGeneralAppointment(user.email, user.name);
                getSMSForGeneralAppointment(user.contactNo, user.name);
                return res.json("appointment done");
            }).catch((err) => {
                console.log(err);
                return res.send(err);
            })

        }else{
            appoint.appointmentsAvail--;
            appoint.save().then(() => {
                getMailForGeneralAppointment(user.email, user.name);
                getSMSForGeneralAppointment(user.contactNo, user.name);
                return res.json("appointment done");
            }).catch((err) => {
                console.log(err);
                return res.send(err);
            })

        }
    }).catch((err) => {
        console.log(err);
        return res.send(err);
    })

    
})

module.exports = router;
const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital');
const docBasedAppointment = require('../models/docBasedAppointment');
const User = require('../models/user');
const Department = require('../models/department');
const Doctor = require('../models/doctor');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
const { getMailForDoctorsAppointment } = require('./mailForAppointment');
const { getSMSForDoctorsAppointment } = require('./smsForAppointment');

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


const availabilityCount = (appointments, arr, docId) => {
    const availabilityCountArr = [];
    let k = 0;
    //below for loop is to initialize the total availability count to 10 for every date
    for(let m = 0;m<arr.length;m++){
        availabilityCountArr[m] = 10;
    }
    for(let j=0;j<arr.length;j++) {
        const id = docId+"+"+arr[j];
        for(let i=0;i<appointments.length ;i++){
            if(appointments[i].dAppointId == id){
                availabilityCountArr[j] = appointments[i].dAppointAvail;
            }
        }
    }
    return availabilityCountArr;
}

const daysPresentInSlot = () => {
    const daysPresentInSlotArr = [];
    const date = new Date();
    daysPresentInSlotArr.push(date.getDay());
    for(let i=1;i<=6;i++){
        daysPresentInSlotArr.push((date.getDay()+i)%7);
    }
    return daysPresentInSlotArr;
}

router.get('/doctorsAppointment/:id', ensureLoggedIn('/login'), (req, res) => {
    const docId = req.params.id;
    let appointments = 0;
    let currentDoc="";
    let arrOfDates = datePick();
    let departments = [];
    Department.find({}).then((departmentsArray) => {
        departments = departmentsArray
    }).catch((error) => {
        console.log(error);
    })
    Doctor.findOne({dId : docId}).then((doctor) => {
        currentDoc = doctor;
        // console.log(currentDoc);
        docBasedAppointment.find({}).then((appoints) => {
            appointments = appoints;
            Hospital.findOne({hId : currentDoc.hId}).then((hospital) => {
                res.render('doctorsAppointment',{
                    departments,
                    hospital,
                    appointments,
                    datesArr: arrOfDates,
                    availabilityCountArr: availabilityCount(appointments, arrOfDates, docId),
                    docId,
                    currentDoc,
                    daysPresentInSlot : daysPresentInSlot()
                })
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        })
    }).catch((err) => {
        console.log(err);
    })
    
    
})

router.post('/doctorsAppointment/:id', (req, res, next) => {
    let date = req.body.date;
    let docId = req.params.id;
    let user = req.user;
    
    const appointId = docId+"+"+date;

    User.findById(user._id).then((user_) => {
        user_.docAppointment.push(appointId);
        user_.save().then(() => {
            next();
        }).catch((err) => {
            return res.send(err)
        })
    }).catch((err) => {
        return res.send(err);
    })
    console.log("appointId "+appointId);
    docBasedAppointment.findOne({dAppointId : appointId}).then((appoint) => {
        if(!appoint){

            const appointment = new docBasedAppointment({
                "dAppointId": appointId,
                "dAppointAvail": 9,
                "patients" : [user._id]
            })
            appointment.save().then(()=>{
                getMailForDoctorsAppointment(user.email, user.name);
                getSMSForDoctorsAppointment(user.contactNo, user.name);
                return res.json("appointment done");
            }).catch((err) => {
                return res.send(err)
            })

        }else{
            console.log("inside else");
            appoint.dAppointAvail=appoint.dAppointAvail-1;
            appoint.save().then(() => {
                getMailForDoctorsAppointment(user.email, user.name);
                getSMSForDoctorsAppointment(user.contactNo, user.name);
                return res.json("appointment done");
            }).catch((err) => {
                return res.send(err)
            })

        }
    }).catch((err) => {
        return res.send(err)
    })

    
})

module.exports = router;
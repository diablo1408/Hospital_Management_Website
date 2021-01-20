const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital');
const Department = require('../models/department');
const Doctor = require('../models/doctor');

router.get('/doctorsAppointmentPDF/:id',(req,res) => {
    const docId = req.params.id;
    const user = req.user;
    Doctor.findOne({dId : docId}).then((doctor) => {
        const hospId = doctor.hId;
        const dateOfApp = user.docAppointment[user.docAppointment.length-1].split('+')[1];
        let currDept = "";
        Department.findOne({deptId : doctor.deptId}).then((dept) => {
            currDept = dept;
        }).catch((err) => {
            console.log(err);
        })
        Hospital.findOne({hId : hospId}).then((hospital) => {
            let departments = [];
            Department.find({}).then((departmentsArray) => {
                departments = departmentsArray
                res.render('doctorsAppointmentPDF', {
                    doctor,
                    user,
                    dateOfApp,
                    hName : hospital.hName,
                    departments,
                    currDept
                })
            }).catch((error) => {
                console.log(error);
            })
        
        }).catch((err) => {
            console.log("hello"+err);
        })
    
    }).catch((err) => {console.log(err);})
    
})

module.exports = router
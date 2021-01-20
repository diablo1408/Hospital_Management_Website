const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital');
const Department = require('../models/department');

router.get('/generalAppointment',(req,res) => {
    const user = req.user;
    const hospId = user.hospAppointment[user.hospAppointment.length-1].split('+')[0];
    const dateOfApp = user.hospAppointment[user.hospAppointment.length-1].split('+')[1];

    Hospital.findOne({hId : hospId}).then((hospital) => {
        let departments = [];
        Department.find({}).then((departmentsArray) => {
            departments = departmentsArray
            res.render('generalAppointment', {
                user,
                dateOfApp,
                hName : hospital.hName,
                departments
            })
        }).catch((error) => {
            console.log(error);
        })
        
    }).catch((err) => {
        console.log("hello"+err);
    })
})

module.exports = router
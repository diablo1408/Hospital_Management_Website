const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital');
const Department = require('../models/department');

router.get('/specificHospital/departments/:id', (req, res) => {
    let hospId = req.params.id;
    let departments = [];
    Department.find({}).then((departmentsArray) => {
        departments = departmentsArray
    }).catch((error) => {
        console.log(error);
    })
    Hospital.findOne({hId : hospId}).then((hospital) => {
        const thisHospDepts = [];
        for(let i=0;i<hospital.depts.length;i++){
            thisHospDepts.push(hospital.depts[i]);
        }
        res.render('departmentsOfDoctors', {
            departments,
            thisHospDepts,
            hospital
        })
        
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;






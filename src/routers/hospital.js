const express = require('express');
const Hospital = require('../models/hospital');
const Department = require('../models/department');
const router = new express.Router();

router.get('/allHospitals', (req, res) => {
    Hospital.find({}).then((hospitals) => {
        res.status(200).send(hospitals);
    }).catch((e) => {
        res.status(500).send(e);
    })
})

router.post('/addHospital', (req, res) => {
    const hospital = new Hospital(req.body)
    // console.log(req.body);
    hospital.save().then(() => {
        res.status(201).send(hospital);
        console.log("post hosp");
    }).catch((error) => {
        res.status(400).send(error);
    })
})

router.get('/deptWiseHosp/:dept_id', (req, res) => {
    const id = req.params.dept_id;
    let hospitals = [], departments = [];
    Department.find({}).then((departmentsArray) => {
        departments = departmentsArray
    }).catch((error) => {
        console.log(error);
    })
    Hospital.find({}).then((hospitalsArray) => {
        hospitals = hospitalsArray;
        Department.findOne({deptId: id}).then((department) => {
            res.render('deptWiseHosp', {hospitals, 
                deptId: id,
                department,
                departments
            })
        }).catch((error) => {
            console.log(error);
        })
        
    }).catch((error) => {
        console.log("error", error);
    })
    
})

module.exports = router;
const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');
const Department = require('../models/department');

router.get('/doctorsOfThisDepartment/:id1/:id2', (req, res) => {
    const deptName = req.query.deptName
    const hospName = req.query.hospName
    const hospId = req.params.id1;
    const deptId = req.params.id2;
    let doctors = [];

    let departments = [];
    Department.find({}).then((departmentsArray) => {
        departments = departmentsArray
    }).catch((error) => {
        console.log(error);
    })

    Doctor.find({}).then((doctorsArr) => {
        for(let i=0;i<doctorsArr.length;i++){
            if(doctorsArr[i].hId == hospId && doctorsArr[i].deptId == deptId){
                doctors.push(doctorsArr[i]);
            }
        }
        res.render('doctorsOfThisDepartment',{
            doctors,
            departments,
            deptName,
            hospName
        })
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;
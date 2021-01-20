const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital');
const Department = require('../models/department');

router.get('/distanceWisePos/:id', (req, res) => {
    const deptId = req.params.id
    console.log(deptId);
    const hospList = [] 
    Hospital.find({}).then((hospitalsArray) => {
        
        for(let i=0;i < hospitalsArray.length;i++){ 
   
            if(hospitalsArray[i].depts.includes(deptId)){ 
                hospList.push(hospitalsArray[i]) 
            } 
        } 
        
        return res.status(200).json({
            data: hospList
        })
        
    }).catch((error) => {
        console.log("error", error);
    })
    

})

router.get('/distanceWisePos', (req, res) => {
    let departments = [];
    Department.find({}).then((departmentsArray) => {
        departments = departmentsArray
        res.render('distanceWisePos', {
            departments
        })
    }).catch((error) => {
        console.log(error);
    })
})

module.exports = router;
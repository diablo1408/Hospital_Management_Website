const express = require('express');
const Department = require('../models/department');
const router = express.Router();

router.get('/aboutUs', (req, res) => {
    let departments = [];
    Department.find({}).then((departmentsArray) => {
        departments = departmentsArray
        res.render('aboutUs',{
            departments
        });
    }).catch((error) => {
        console.log(error);
    })
})

module.exports = router;
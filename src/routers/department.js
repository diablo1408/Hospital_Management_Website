const express = require('express');
const Department = require('../models/department');
const router = new express.Router();

router.get('/departmentAll', (req, res) => {
    Department.find({}).then((departments) => {
        res.status(200).send(departments);
    }).catch((e) => {
        res.status(500).send();
    })
})

router.get('/add_department', (req, res) => {
    res.render('dept_add');
})

router.post('/add_department', (req, res) => {
    // const department = new Department(req.body)
    res.send(req.user);
    // department.save().then(() => {
    //     res.redirect('/');
    // }).catch((e) => {
    //     res.status(400).send(e);
    // }) 
})

module.exports = router;
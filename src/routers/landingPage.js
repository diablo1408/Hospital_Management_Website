const express = require('express');
const Department = require('../models/department');
const router  = express.Router();

router.get('/', (req, res) => {
    Department.find({}).then((departments) => {
        res.render('index.ejs', {
            departments
        })
    })
});

module.exports = router;
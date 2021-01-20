const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/cancelHospAppointment', async (req, res) => {
    console.log("insiide post ");
    let userId = req.user._id;
    console.log(userId);
    let date = req.body.date
    let hospId = req.body.hospId
    let appointId = hospId+"+"+date;
    let users = await User.find({});
    let currUser='';
    for(let i=0;i<users.length;i++){
        if(users[i]._id.equals(userId)){
            console.log("inside if");
            currUser = users[i];
            break;
        }
    }
    let ind = currUser.hospAppointment.indexOf(appointId);
    // console.log(ind);
    if(ind > -1){
        currUser.hospAppointment.splice(ind, 1);
        // console.log(currUser);
    }
    await currUser.save();
    res.json({
        msg: "all ok"
    })
    
})

module.exports = router
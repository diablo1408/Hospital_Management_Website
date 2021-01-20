const express = require('express');
const passport = require('../authentication/setupPassport');
const User = require('../models/user');
const router = new express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
const Hospital = require('../models/hospital');
const Department = require('../models/department');
const Doctor = require('../models/doctor');

const hospFunc = (hospId, date) => {
    return new Promise((resolve, reject) => {
        Hospital.findOne({hId : hospId}).then((hospital) => {
            // console.log(hospital);
            let obj = {
                hospId,
                hospAppName: hospital.hName,
                hospAppDate: date
            }
            // console.log(obj);
            resolve(obj)
            
        }).catch((err) => {
            reject(err);
        })
    })
}

const docFunc = (docId, date) => {
    return new Promise((resolve, reject) => {
        Doctor.findOne({dId: docId}).then(async (doctor) => {
            let deptId = doctor.deptId;
            let hospId = doctor.hId;

            let dept = await Department.findOne({deptId: deptId});
            let hosp = await Hospital.findOne({hId: hospId});

            docHospName = hosp.hName;
            docDeptName = dept.deptName;
            
            let obj = {
                docId,
                docHospName,
                docDeptName,
                doctor,
                docAppDate: date 
            }
            console.log(obj);
            resolve(obj);
        }).catch((err) => {
            reject(err)
        })
    })
}


router.get('/user', ensureLoggedIn('/login'), async (req, res) => {
   const user = req.user;
   let generalApp = [], docApp = [], departments = [];

   Department.find({}).then((departs) => {
       departments = departs;
   }).catch((err) => {
       console.log("inside error of department of user.js "+err);
   })

   const forLoopHosp = async () => {
        for(let i=0;i<user.hospAppointment.length;i++){
            let hospId = user.hospAppointment[i].split("+")[0];
            let date = user.hospAppointment[i].split("+")[1];
            let obj = await hospFunc(hospId, date);
            generalApp.push(obj);
        }
    }

    const forLoopDoc = async () => {
        for(let i=0;i<user.docAppointment.length;i++){
            let docId = user.docAppointment[i].split("+")[0];
            let date = user.docAppointment[i].split("+")[1];
            let obj = await docFunc(docId, date);
            docApp.push(obj);
        }
    }
    
    await forLoopHosp();
    await forLoopDoc();

   console.log("see here" + docApp +"after see here");
    
   res.render('user', {
        generalApp,
        docApp,
        departments,
        user
    })

})

router.get('/signUp', (req, res) => {
    res.render('signUp');
})

router.post('/signUp', (req, res) => {
    // const user = new User(req.body);
    const {name, email, password, confirmPass, age, contactNo} = req.body;
    let errors = [];
    if(!name || ! email || !password || !confirmPass || !confirmPass || !age || !contactNo){
        errors.push({msg : "Please enter all the fields"})
    }

    if(password.length < 6){
        errors.push({msg : "password should be atleast 6 in length"})
    }

    if(password != confirmPass){
        errors.push({msg : 'Passwords do not match'})
    }

    if(errors.length > 0){
        res.render('signUp',{
            errors,
            name,
            email,
            password,
            confirmPass, 
            age, 
            contactNo
        })
    }else{
        User.findOne({email : email}).then((user) => {
            if(!user){
                const user = new User(req.body);
                user.save().then(() => {
                    req.flash('success_msg', 'You are now registered and can log in');
                    res.redirect('/login')
                }).catch((err) => {
                    res.status(400).send(err);
                })
            }else{
                errors.push({msg : "email iD already exist"});
                res.render('signUp',{
                    errors, name, email, password, confirmPass, age, contactNo
                })
            }
        }).catch((e) => {
            errors.push(e);
            res.render('signUp',{
                errors, name, email, password, confirmPass, age, contactNo
            })
        })
    }
    
})
router.get('/login',(req, res) => {
    res.render('login');
})

router.post('/login', passport.authenticate('local',{
        successReturnToOrRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true // this is to set flash message
    })
)

router.get('/editUser/:id', (req, res) => {
    const _id = req.params.id;
    User.findById(_id).then((user) => {
        res.render('editUser',{
            user
        });
    })
})

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/login');
});

router.post('/editUser/:id', (req, res) => {
    const updates = Object.keys(req.body);
    console.log(updates);
    User.findById(req.params.id).then((user) => {
        updates.forEach((update) => {
            //here updates contains the keys in the form of string, and also req.body is an object, hence to access the value corresponding to given key, we have applied square bracket because the key is string and to access this keys value , i have to access usin sq. brac., if it would have been normal key, not string one, then simple dot operator would have worked
            user[update] = req.body[update];
        })
        user.save().then(() => {
            res.redirect('/');
        }).catch((e) => {
            console.log(e);
        })
    }).catch((e) => {
        console.log(e);
    })
})

module.exports = router;
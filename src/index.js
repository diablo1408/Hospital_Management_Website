const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');

require('./db/mongoose');
const passport = require('./authentication/setupPassport');
const departmentRouter = require('./routers/department');
const hospitalRouter = require('./routers/hospital');
const userRouter = require('./routers/user');
const landingPageRouter = require('./routers/landingPage');
const specificHospitalRouter = require('./routers/specificHospital');
const generalAppointmentRouter = require('./routers/generalAppointment');
const departmentsOfDoctorsRouter = require('./routers/departmentsOfDoctors');
const doctorsOfThisDepartmentRouter = require('./routers/doctorsOfThisDepartment');
const doctorsAppointmentRouter = require('./routers/doctorsAppointment');
const doctorsAppointmentPDFRouter = require('./routers/doctorsAppointmentPDF');
const aboutUsRouter = require('./routers/aboutUs');
const contactUsRouter = require('./routers/contactUs');
const distanceWisePosRouter = require('./routers/distanceWisePos');
const cancelHospAppointmentRouter = require('./routers/cancelHospAppointment');
const cancelDocAppointmentRouter = require('./routers/cancelDocAppointment');

const app = express();

//body-parser
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname,'views'));

//express session
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//connect flash
app.use(flash());

//global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    //the error of passport flash will be in error
    res.locals.error = req.flash('error');
    next();
});

app.use(departmentRouter);
app.use(hospitalRouter);
app.use(userRouter);
app.use(landingPageRouter);
app.use(specificHospitalRouter);
app.use(generalAppointmentRouter);
app.use(departmentsOfDoctorsRouter);
app.use(doctorsOfThisDepartmentRouter);
app.use(doctorsAppointmentRouter);
app.use(doctorsAppointmentPDFRouter);
app.use(aboutUsRouter);
app.use(contactUsRouter);
app.use(distanceWisePosRouter);
app.use(cancelHospAppointmentRouter);
app.use(cancelDocAppointmentRouter);

const port = process.env.PORT || 3300;
app.listen(port, () => {
    console.log('Server is up on port ' + port);
})
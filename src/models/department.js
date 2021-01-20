const mongoose = require('mongoose');

const Department = mongoose.model('Department', {
    deptName: String,
    treatments: [{
        treatmentName: {type: String,
        trim: true},
        treatmentPrice: Number
    }],
    deptId: Number
})

// const department1 = new Department({
//     "deptName" : "Anaesthesiology",
//         "treatments" : [ {
//           "treatmentName" : "Fissurectomy",
//           "treatmentPrice" : "1000"
//         }, {
//           "treatmentName" : "Fistulectomy",
//           "treatmentPrice" : "500"
//         } ],
     
//       "deptId" : 1
// })

// department1.save().then(()=>{
//     console.log("ok");
// }).catch((error) => {
//     console.log(error);
// })



module.exports = Department
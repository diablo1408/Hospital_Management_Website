const mongoose = require('mongoose');

const Doctor = mongoose.model('Doctor', {
    daysAvailable : [Number],
    dId : Number,
    deptId : Number,
    designation : String,
    experience : Number,
    firstName : String,
    gender : String,
    hId : Number,
    lastName : String,
    qualification : String,
    rating : Number
})

// const doctor1 = new  Doctor({
//     "daysAvailable" : [1,3,5],
//     "dId" : 0,
//     "deptId" : 0,
//     "designation" : "Surgeon",
//     "experience" : 10,
//     "firstName" : "Abha",
//     "gender" : "female",
//     "hId" : 0,
//     "lastName" : "Singh",
//     "qualification" : "MBBS,MD",
//     "rating" : 4
// })

// doctor1.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor2 = new  Doctor({
//     "daysAvailable" : [2,4,6,0],
//     "dId" : 1,
//     "deptId" : 0,
//     "designation" : "Surgeon",
//     "experience" : 8,
//     "firstName" : "Abhilasha",
//     "gender" : "female",
//     "hId" : 0,
//     "lastName" : "Singh",
//     "qualification" : "MBBS,MD",
//     "rating" : 5
// })

// doctor2.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor3 = new  Doctor({
//     "daysAvailable" : [2,4,6,0],
//     "dId" : 2,
//     "deptId" : 1,
//     "designation" : "Anaesthesiologist",
//     "experience" : 8,
//     "firstName" : "Aditi",
//     "gender" : "female",
//     "hId" : 0,
//     "lastName" : "Sharma",
//     "qualification" : "MBBS,MS",
//     "rating" : 4
// })

// doctor3.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor4 = new  Doctor({
//     "daysAvailable" : [0,1,3,5],
//     "dId" : 3,
//     "deptId" : 1,
//     "designation" : "Anaesthesiologist",
//     "experience" : 8,
//     "firstName" : "Aakash",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Sharma",
//     "qualification" : "MBBS,MD",
//     "rating" : 4
// })

// doctor4.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor5 = new  Doctor({
//     "daysAvailable" : [0,1,3,5],
//     "dId" : 4,
//     "deptId" : 2,
//     "designation" : " Cardiologist",
//     "experience" : 20,
//     "firstName" : "Disha",
//     "gender" : "female",
//     "hId" : 0,
//     "lastName" : "Tyagi",
//     "qualification" : "MBBS,MD",
//     "rating" : 5
// })

// doctor5.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor6 = new  Doctor({
//     "daysAvailable" : [5,2],
//     "dId" : 5,
//     "deptId" : 2,
//     "designation" : " Cardiologist",
//     "experience" : 30,
//     "firstName" : "Naresh",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Trehan",
//     "qualification" : "MBBS,MS",
//     "rating" : 5
// })

// doctor6.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor7 = new  Doctor({
//     "daysAvailable" : [5,2,0],
//     "dId" : 6,
//     "deptId" : 3,
//     "designation" : "Internist",
//     "experience" : 10,
//     "firstName" : "Anil",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Kumar",
//     "qualification" : "FRCPE,DGO",
//     "rating" : 3
// })

// doctor7.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor8 = new  Doctor({
//     "daysAvailable" : [1,3,5],
//     "dId" : 7,
//     "deptId" : 3,
//     "designation" : "Internist",
//     "experience" : 12,
//     "firstName" : "Vaibhav",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Kumar",
//     "qualification" : "FRCPE,DGO",
//     "rating" : 4
// })

// doctor8.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor9 = new  Doctor({
//     "daysAvailable" : [1,3,5,2],
//     "dId" : 8,
//     "deptId" : 4,
//     "designation" : "Oncologist",
//     "experience" : 18,
//     "firstName" : "Manshi",
//     "gender" : "female",
//     "hId" : 0,
//     "lastName" : "Purohit",
//     "qualification" : "DGO,MS",
//     "rating" : 4
// })

// doctor9.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor10 = new  Doctor({
//     "daysAvailable" : [1,3,5,2,6],
//     "dId" : 9,
//     "deptId" : 4,
//     "designation" : "Oncologist",
//     "experience" : 24,
//     "firstName" : "Amrita",
//     "gender" : "female",
//     "hId" : 0,
//     "lastName" : "Singh",
//     "qualification" : "DGO,MS",
//     "rating" : 4
// })

// doctor10.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor11 = new  Doctor({
//     "daysAvailable" : [1,3,5,6],
//     "dId" : 10,
//     "deptId" : 5,
//     "designation" : "Endocrinologist",
//     "experience" : 16,
//     "firstName" : "Rajeev",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Arora",
//     "qualification" : "MBBS,MS",
//     "rating" : 5
// })

// doctor11.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor12 = new  Doctor({
//     "daysAvailable" : [1,3,5,6,0],
//     "dId" : 11,
//     "deptId" : 5,
//     "designation" : "Endocrinologist",
//     "experience" : 12,
//     "firstName" : "Kamlesh",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Arora",
//     "qualification" : "DNB,MD",
//     "rating" : 5
// })

// doctor12.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor13 = new  Doctor({
//     "daysAvailable" : [3,5,6,0],
//     "dId" : 12,
//     "deptId" : 6,
//     "designation" : "Radiologists ",
//     "experience" : 16,
//     "firstName" : "Vipul",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Shah",
//     "qualification" : "DNB,MD",
//     "rating" : 3
// })

// doctor13.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor14 = new  Doctor({
//     "daysAvailable" : [3,5,0,2],
//     "dId" : 13,
//     "deptId" : 6,
//     "designation" : "Radiologists ",
//     "experience" : 25,
//     "firstName" : "Sukhbir",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Sngh",
//     "qualification" : "MBBS,Md",
//     "rating" : 5
// })

// doctor14.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor15 = new  Doctor({
//     "daysAvailable" : [3,5,0,4],
//     "dId" : 14,
//     "deptId" : 7,
//     "designation" : "Gastroenterologist",
//     "experience" : 14,
//     "firstName" : "Omisha",
//     "gender" : "female",
//     "hId" : 0,
//     "lastName" : "Jain",
//     "qualification" : "FRCPE,MBBS",
//     "rating" : 5
// })

// doctor15.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor16 = new  Doctor({
//     "daysAvailable" : [3,5,0,4,1],
//     "dId" : 15,
//     "deptId" : 7,
//     "designation" : "Gastroenterologist",
//     "experience" : 16,
//     "firstName" : "Manisha",
//     "gender" : "female",
//     "hId" : 0,
//     "lastName" : "Khattar",
//     "qualification" : "FRCPE,MBBS",
//     "rating" : 4
// })

// doctor16.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor17 = new  Doctor({
//     "daysAvailable" : [3,5,0,4,1],
//     "dId" : 16,
//     "deptId" : 8,
//     "designation" : "Surgeon",
//     "experience" : 16,
//     "firstName" : "Varsha",
//     "gender" : "female",
//     "hId" : 0,
//     "lastName" : "Rawat",
//     "qualification" : "DGO,DO",
//     "rating" : 4
// })

// doctor17.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor18 = new  Doctor({
//     "daysAvailable" : [3,5,0,4,1],
//     "dId" : 17,
//     "deptId" : 8,
//     "designation" : "Surgeon",
//     "experience" : 16,
//     "firstName" : "Harsh",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Gupta",
//     "qualification" : "DGO,DO",
//     "rating" : 4
// })

// doctor18.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor19 = new  Doctor({
//     "daysAvailable" : [3,0,2,6],
//     "dId" : 18,
//     "deptId" : 8,
//     "designation" : "Surgeon",
//     "experience" : 18,
//     "firstName" : "Rajat",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Cambo",
//     "qualification" : "DGO,DO",
//     "rating" : 5
// })

// doctor19.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor20 = new  Doctor({
//     "daysAvailable" : [3,0,2,6],
//     "dId" : 19,
//     "deptId" : 9,
//     "designation" : "Hematologist",
//     "experience" : 27,
//     "firstName" : "Tanuj",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Vyas",
//     "qualification" : "DGO,MD",
//     "rating" : 5
// })

// doctor20.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor22 = new  Doctor({
//     "daysAvailable" : [0,1,4,5],
//     "dId" : 20,
//     "deptId" : 9,
//     "designation" : "Hematologist",
//     "experience" : 25,
//     "firstName" : "Nishkarsh",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Kwatra",
//     "qualification" : "DGO,MD",
//     "rating" : 5
// })

// doctor22.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor24 = new  Doctor({
//     "daysAvailable" : [2,3,6,5],
//     "dId" : 21,
//     "deptId" : 10,
//     "designation" : "Nephrologists",
//     "experience" : 22,
//     "firstName" : "Shloak",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Bansal",
//     "qualification" : "DGO,MS",
//     "rating" : 5
// })

// doctor24.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor25 = new  Doctor({
//     "daysAvailable" : [2,3,6,5,1,4,0],
//     "dId" : 22,
//     "deptId" : 10,
//     "designation" : "Nephrologists",
//     "experience" : 30,
//     "firstName" : "Devesh",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Sharma",
//     "qualification" : "MBBS,MS",
//     "rating" : 5
// })

// doctor25.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor26 = new  Doctor({
//     "daysAvailable" : [3,5,1,0],
//     "dId" : 23,
//     "deptId" : 11,
//     "designation" : "Obstetricians and Gynecologists",
//     "experience" : 20,
//     "firstName" : "Rakesh",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Patil",
//     "qualification" : "MBBS,MD",
//     "rating" : 4
// })

// doctor26.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor27 = new  Doctor({
//     "daysAvailable" : [5,2,4,6],
//     "dId" : 24,
//     "deptId" : 11,
//     "designation" : "Obstetricians and Gynecologists",
//     "experience" : 22,
//     "firstName" : "Sulekha",
//     "gender" : "female",
//     "hId" : 0,
//     "lastName" : "Manik",
//     "qualification" : "MBBS,MD",
//     "rating" : 5
// })

// doctor27.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor28 = new  Doctor({
//     "daysAvailable" : [5,2,4,6],
//     "dId" : 25,
//     "deptId" : 12,
//     "designation" : "Ophthalmologists ",
//     "experience" : 17,
//     "firstName" : "Ram",
//     "gender" : "female",
//     "hId" : 0,
//     "lastName" : "Choubey",
//     "qualification" : "DGO,MD",
//     "rating" : 4
// })

// doctor28.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor29 = new  Doctor({
//     "daysAvailable" : [5,6,1,3],
//     "dId" : 26,
//     "deptId" : 12,
//     "designation" : "Ophthalmologists ",
//     "experience" : 19,
//     "firstName" : "Shyam",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Sharma",
//     "qualification" : "DGO,MS",
//     "rating" : 4
// })

// doctor29.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor30 = new  Doctor({
//     "daysAvailable" : [5,6,1,3],
//     "dId" : 27,
//     "deptId" : 13,
//     "designation" : "Surgeon",
//     "experience" : 15,
//     "firstName" : "Preeti",
//     "gender" : "female",
//     "hId" : 0,
//     "lastName" : "Sharma",
//     "qualification" : "DGO,MS",
//     "rating" : 5
// })

// doctor30.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor31 = new  Doctor({
//     "daysAvailable" : [5,6,3,2,1,4,0],
//     "dId" : 28,
//     "deptId" : 13,
//     "designation" : "Surgeon",
//     "experience" : 11,
//     "firstName" : "Shyamli",
//     "gender" : "female",
//     "hId" : 0,
//     "lastName" : "Sharma",
//     "qualification" : "MBBS,MD",
//     "rating" : 5
// })

// doctor31.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor32 = new  Doctor({
//     "daysAvailable" : [5,6,3,2,1,4,0],
//     "dId" : 29,
//     "deptId" : 14,
//     "designation" : "Pharmacist",
//     "experience" : 17,
//     "firstName" : "Ram",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Kishore",
//     "qualification" : "DGO,MD",
//     "rating" : 5
// })

// doctor32.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor33 = new  Doctor({
//     "daysAvailable" : [5,6,3,2,1,4,0],
//     "dId" : 30,
//     "deptId" : 14,
//     "designation" : "Pharmacist",
//     "experience" : 10,
//     "firstName" : "Mayank",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Kishore",
//     "qualification" : "DGO,MD",
//     "rating" : 4
// })

// doctor33.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor34 = new  Doctor({
//     "daysAvailable" : [5,2,1,4,0],
//     "dId" : 31,
//     "deptId" : 15,
//     "designation" : "Physiologist",
//     "experience" : 10,
//     "firstName" : "Sumit",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Raj",
//     "qualification" : "DMO,MD",
//     "rating" : 4
// })

// doctor34.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor35 = new  Doctor({
//     "daysAvailable" : [5,4,0,6],
//     "dId" : 32,
//     "deptId" : 15,
//     "designation" : "Physiologist",
//     "experience" : 12,
//     "firstName" : "Suresh",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Prabhu",
//     "qualification" : "DMO,MD",
//     "rating" : 5
// })

// doctor35.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor36 = new  Doctor({
//     "daysAvailable" : [5,4,0,6,1],
//     "dId" : 33,
//     "deptId" : 16,
//     "designation" : "Psychiatrists ",
//     "experience" : 19,
//     "firstName" : "Narender",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Das",
//     "qualification" : "DMO,MD",
//     "rating" : 5
// })

// doctor36.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor37 = new  Doctor({
//     "daysAvailable" : [5,4,0,6,1,2,3],
//     "dId" : 34,
//     "deptId" : 16,
//     "designation" : "Psychiatrists ",
//     "experience" : 19,
//     "firstName" : "Shushma",
//     "gender" : "female",
//     "hId" : 0,
//     "lastName" : "Tiwari",
//     "qualification" : "MBBS,MD",
//     "rating" : 5
// })

// doctor37.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor38 = new  Doctor({
//     "daysAvailable" : [5,4,0,6,1,2,3],
//     "dId" : 35,
//     "deptId" : 17,
//     "designation" : "Rheumatologist",
//     "experience" : 32,
//     "firstName" : "Dhruv",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Misra",
//     "qualification" : "MBBS,MD",
//     "rating" : 5
// })

// doctor38.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor39 = new  Doctor({
//     "daysAvailable" : [5,4,0,6,1,2,3],
//     "dId" : 36,
//     "deptId" : 17,
//     "designation" : "Rheumatologist",
//     "experience" : 30,
//     "firstName" : "Aditi",
//     "gender" : "female",
//     "hId" : 0,
//     "lastName" : "Garg",
//     "qualification" : "MBBS,MD",
//     "rating" : 5
// })

// doctor39.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor40 = new  Doctor({
//     "daysAvailable" : [5,4,0,6,1,2,3],
//     "dId" : 37,
//     "deptId" : 18,
//     "designation" : "Urologist",
//     "experience" : 12,
//     "firstName" : "Rajeev",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Nayan",
//     "qualification" : "MBBS,MD",
//     "rating" : 5
// })

// doctor40.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor41 = new  Doctor({
//     "daysAvailable" : [5,4,0,1],
//     "dId" : 38,
//     "deptId" : 18,
//     "designation" : "Urologist",
//     "experience" : 27,
//     "firstName" : "Aarif",
//     "gender" : "male",
//     "hId" : 0,
//     "lastName" : "Khan",
//     "qualification" : "MBBS,MS",
//     "rating" : 5
// })

// doctor41.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor42 = new  Doctor({
//     "daysAvailable" : [5,4,0,1,2,3,6],
//     "dId" : 39,
//     "deptId" : 19,
//     "designation" : "Neurologist",
//     "experience" : 17,
//     "firstName" : "Aashima",
//     "gender" : "female",
//     "hId" : 0,
//     "lastName" : "Khan",
//     "qualification" : "DGO,M.Ch",
//     "rating" : 5
// })

// doctor42.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

// const doctor43 = new  Doctor({
//     "daysAvailable" : [5,4,0,1,2,3,6],
//     "dId" : 40,
//     "deptId" : 19,
//     "designation" : "Neurologist",
//     "experience" : 23,
//     "firstName" : "Neha",
//     "gender" : "female",
//     "hId" : 0,
//     "lastName" : "Dutta",
//     "qualification" : "DGO,M.Ch",
//     "rating" : 5
// })

// doctor43.save().then(() => {
//     console.log("ok");
// }).catch((err) => {
//     console.log(error);
// })

module.exports = Doctor
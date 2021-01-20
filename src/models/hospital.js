// const mongoose = require('mongoose');

// const Hospital = mongoose.model('Hospital', {
//     address: {
//         type: String,
//         trim: true
//     },
//     beds: {
//         type: Number,
//         trim: true
//     },
//     bedsAvailable: {
//         type: Number,
//         trim: true
//     },
//     maxAppointment: {
//         type: Number,
//         trim: true
//     },
//     contact: {
//         type: String,
//         trim: true
//     },
//     depts: {
//         type: [Number],
//     },
//     hId: {
//         type: Number,
//         required: true,
//         trim: true
//     },
//     hName: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     link:{                  //google map link
//         type: String,
//         trim: true
//     },
//     hospLink: {
//         type: String,
//         trim: true
//     },
//     imageURL: {
//         type: String,
//         trim: true
//     }
// })
// const hospital = new Hospital({
//     "address" : " Ring Road, Ansari Nagar, Near AIIMS Metro Station, New Delhi, Delhi 1229",
//     "beds" : 1531,
//     "bedsAvailable" : 0,
//     "maxAppointment" : 2,
//     "contact" : "01126588500",
//     "depts" : [ 16, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19 ],
//     "hId" : 0,
//     "hName" : "All India Institute of Medical Sciences (AIIMS)",
//     "link" : "https://goo.gl/maps/PSjqbKEDUU52",
//     "hospLink" :"https://www.aiims.edu/en.html",
//     "imageURL": "images/hospImages/aiims.jpg",
// })

// hospital.save().then(() => {
    
// }).catch((e) => {

// })

// const hospital1 = new Hospital({
//     "address" : "Safdarjung Campus, Ansari Nagar West, New Delhi, Delhi 1229",
//     "beds" : 1331,
//     "bedsAvailable" : 0,
//     "maxAppointment" : 2,
//     "contact" : "01123230788",
//     "depts" : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 11 ],
//     "hId" : 1,
//     "hName" : "Safdarjung Hospital",
//     "link" : "https://goo.gl/maps/KVxrkZBmHM92",
//     "hospLink" : "http://www.vmmc-sjh.nic.in/",
//     "imageURL": "images/hospImages/safdarjung.jpg",
// })

// hospital1.save().then(() => {

// }).catch((e) => {

// })

// const hospital2 = new Hospital({
//     "address" : "Delhi Gate, Nehru Marg, Daryaganj, New Delhi, Delhi 110002",
//     "beds" : 800,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01123230733",
//     "depts" : [ 1, 2, 3, 4, 5, 0 ],
//     "hId" : 2,
//     "hName" : "Lok Nayak Jai Prakash Narain Hospital",
//     "link" : "https://goo.gl/maps/GStBG6DuzoT2",
//     "hospLink" :"http://tte.delhigovt.nic.in/wps/wcm/connect/DoIT_LNJP/lnjp/home",
//     "imageURL": "images/hospImages/lokNayak.jpg",
// })

// hospital2.save().then(() => {

// }).catch((e) => {

// })

// const hospital3 = new Hospital({
//     "address" : " Jawaharlal Nehru Marg, New Delhi, Delhi 110002",
//     "beds" : 443,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01122586262",
//     "depts" : [ 1, 2, 4, 0, 8, 11 ],
//     "hId" : 3,
//     "hName" : "G.B. Pant Hospital",
//     "link" : "https://goo.gl/maps/KeCt7Wg8kow",
//     "hospLink" :"http://gbpant.delhigovt.nic.in/wps/wcm/connect/doit_gbph/GBPH/Home/",
//     "imageURL": "images/hospImages/gbPant.jpg",
// })

// hospital3.save().then(() => {

// }).catch((e) => {

// })

// const hospital4 = new Hospital({
//     "address" : "Guru Teg Bahadur Hospital, Dilshad Garden, Delhi, 110095",
//     "beds" : 143,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01122586262",
//     "depts" : [ 2, 4, 8, 11, 6, 13 ],
//     "hId" : 4,
//     "hName" : "Guru Teg Bahadur Hospital",
//     "link" : "https://goo.gl/maps/msW8sbU6BD82",
//     "hospLink" :"http://health.delhigovt.nic.in/wps/wcm/connect/doit_gtbh/GTBH/Home/General+Information",
//     "imageURL": "images/hospImages/GTB.jpg",
// })

// hospital4.save().then(() => {

// }).catch((e) => {

// })

// const hospital5 = new Hospital({
//     "address" : "Patel Nagar New Delhi-110008",
//     "beds" : 276,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01125885944",
//     "depts" : [ 2, 4, 8, 18, 16 ],
//     "hId" : 5,
//     "hName" : "Sardar Vallabh Bhai Patel Hospital",
//     "link" : "https://goo.gl/maps/ch3N8JAyWHK2",
//     "hospLink" :"http://health.delhigovt.nic.in/wps/wcm/connect/doit_svbph/SVBPH/Home/Service+Available",
//     "imageURL": "images/hospImages/svp.jpg",
// })

// hospital5.save().then(() => {

// }).catch((e) => {

// })

// const hospital6 = new Hospital({
//     "address" : "Malviya Nagar New Delhi-110017",
//     "beds" : 400,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01126680603",
//     "depts" : [ 4, 8, 18, 16 ],
//     "hId" : 6,
//     "hName" : "Pt. Madan Mohan Malviya Hospital",
//     "link" : "https://goo.gl/maps/mYvPV7sLQe22",
//     "hospLink" :"https://www.nhp.gov.in/hospital/pt-madan-mohan-malviya-hospital-south-delhi",
//     "imageURL": "images/hospImages/mmm.jpg",
// })

// hospital6.save().then(() => {

// }).catch((e) => {

// })

// const hospital7 = new Hospital({
//     "address" : "M.A.M.C. J.L. Nehru Marg, New Delhi-110002",
//     "beds" : 143,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01123233925",
//     "depts" : [ 4, 8, 18, 16 ],
//     "hId" : 7,
//     "hName" : "Maulana Azad Medical College",
//     "link" : "https://goo.gl/maps/y5YMHrDM1d82",
//     "hospLink" :"https://www.nhp.gov.in/hospital/pt-madan-mohan-malviya-hospital-south-delhi",
//     "imageURL": "images/hospImages/mamc.jpg",
// })

// hospital7.save().then(() => {

// }).catch((e) => {

// })

// const hospital8 = new Hospital({
//     "address" : "Khichri Pur New Delhi-110091",
//     "beds" : 600,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01122774145",
//     "depts" : [ 4, 8, 18, 16, 0 ],
//     "hId" : 8,
//     "hName" : "Lal Bahadur Shastri Hospital (L.B.S.)",
//     "link" : "https://goo.gl/maps/bXsJwtjcWGC2",
//     "hospLink" :"http://health.delhigovt.nic.in/wps/wcm/connect/doit_lbsh/LBSH/Home/",
//     "imageURL": "images/hospImages/Lbs.jpg",
// })

// hospital8.save().then(() => {

// }).catch((e) => {

// })

// const hospital9 = new Hospital({
//     "address" : "A-Block, Shalimar Bagh, Near Kela Godam, Delhi - 110088",
//     "beds" : 162,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01125885987",
//     "depts" : [ 4, 8, 18, 16, 0, 13, 11 ],
//     "hId" : 9,
//     "hName" : "Fortis Hospital",
//     "link" : "https://goo.gl/maps/9m2noCdMVzQ2",
//     "hospLink" :"https://www.fortishealthcare.com/india/fortis-flt-lt-rajan-dhall-hospital-in-vasant-kunj-delhi",
//     "imageURL": "images/hospImages/fortis.jpg",
// })

// hospital9.save().then(() => {

// }).catch((e) => {

// })

// const hospital99 = new Hospital({
//     "address" : "Saket,New Delhi-110016",
//     "beds" : 189,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01125885452",
//     "depts" : [ 18, 16, 0, 13, 11, 12, 6 ],
//     "hId" : 10,
//     "hName" : "Max Super Speciality Hospital",
//     "link" : "https://goo.gl/maps/VkHJsLdAKwL2",
//     "hospLink" :"https://www.maxhealthcare.in/",
//     "imageURL": "images/hospImages/max.jpg",
// })

// hospital99.save().then(() => {

// }).catch((e) => {

// })

// const hospital999 = new Hospital({
//     "address" : "Sarita Delhi, Mathura Road,New Delhi - 110076",
//     "beds" : 234,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01126825563",
//     "depts" : [ 16, 13, 12, 6, 15, 19 ],
//     "hId" : 11,
//     "hName" : "Indraprastha Apollo Hospital",
//     "link" : "https://goo.gl/maps/NvMm7rFA5qp",
//     "hospLink" :"https://delhi.apollohospitals.com/",
//     "imageURL": "images/hospImages/ipApollo.jpg",
// })

// hospital999.save().then(() => {

// }).catch((e) => {

// })

// const hospital9999 = new Hospital({
//     "address" : "Block C, Shivaji Park, Punjabi Bagh, New Delhi, Delhi 110026",
//     "beds" : 105,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01126834563",
//     "depts" : [ 13, 15, 19, 10, 1, 6, 17 ],
//     "hId" : 12,
//     "hName" : "Maharaja Agrasen Hospital",
//     "link" : "https://goo.gl/maps/wz8xeyoaPTP2",
//     "hospLink" :"https://delhi.apollohospitals.com/",
//     "imageURL": "images/hospImages/maharajaAgrasen.jpg",
// })

// hospital9999.save().then(() => {

// }).catch((e) => {

// })

// const hospital11 = new Hospital({
//     "address" : "Plot No -1, Shakti Khand 3-Indirapuram, Delhi - 201014",
//     "beds" : 85,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01126834876",
//     "depts" : [ 2, 6, 9, 12 ],
//     "hId" : 13,
//     "hName" : "Healing Tree Hospital",
//     "link" : "https://goo.gl/maps/3Q2e4FExFCz",
//     "hospLink" :"http://www.healingtreehospital.com/",
//     "imageURL": "images/hospImages/healingTree.jpg",
// })

// hospital11.save().then(() => {

// }).catch((e) => {

// })

// const hospital22 = new Hospital({
//     "address" : "Hari Nagar, New Delhi-110064",
//     "beds" : 98,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01125494337",
//     "depts" : [ 2, 6, 9, 12, 4 ],
//     "hId" : 14,
//     "hName" : "Deen Dayal Upadhyay Hospital",
//     "link" : "https://goo.gl/maps/NgMPqNurvRw",
//     "hospLink" :"http://health.delhigovt.nic.in/wps/wcm/connect/DOIT_DDUH/dduh/home",
//     "imageURL": "images/hospImages/DDU.jpg",
// })

// hospital22.save().then(() => {

// }).catch((e) => {

// })

// const hospital33 = new Hospital({
//     "address" : "Narela, Delhi-110040",
//     "beds" : 109,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01125494453",
//     "depts" : [ 0, 3, 7, 9, 11 ],
//     "hId" : 15,
//     "hName" : "Satyawadi Raja Harish Chandra Hospital",
//     "link" : "https://goo.gl/maps/oWwgFdSSTPp",
//     "hospLink" :"https://www.nhp.gov.in/hospital/satyawadi-raja-harish-chandra-hospital-north_west-delhi",
//     "imageURL": "images/hospImages/rajaHarishChandra.jpg",
// })

// hospital33.save().then(() => {

// }).catch((e) => {

// })

// const hospital44 = new Hospital({
//     "address" : "Jahangir Puri, New Delhi110033 ",
//     "beds" : 300,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01125494763",
//     "depts" : [ 0, 3, 7, 9, 11 ],
//     "hId" : 16,
//     "hName" : "Babu Jagjivan Ram Hospital",
//     "link" : "https://goo.gl/maps/x3ZQoG1B3PN2",
//     "hospLink" :"https://www.nhp.gov.in/hospital/babu-jagjivan-ram-memorial-hospital-north_west-delhi",
//     "imageURL": "images/hospImages/JagjivanRam.jpg",
// })

// hospital44.save().then(() => {

// }).catch((e) => {

// })

// const hospital55 = new Hospital({
//     "address" : "Sector 6, Rohini, New Delhi.-110085",
//     "beds" : 350,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01125494021",
//     "depts" : [ 0, 3, 7, 9, 11, 5 ],
//     "hId" : 17,
//     "hName" : "Baba Saheb Ambedkar Hospital",
//     "link" : "https://goo.gl/maps/1HDsGxpyicS2",
//     "hospLink" :"http://health.delhigovt.nic.in/wps/wcm/connect/DOIT_DBSAH/dbsah/home",
//     "imageURL": "images/hospImages/babaSahebAmbedkar.jpg",
// })

// hospital55.save().then(() => {

// }).catch((e) => {

// })

// const hospital66 = new Hospital({
//     "address" : "Rajpur Road,Delhi.110054",
//     "beds" : 443,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01125494487",
//     "depts" : [ 0, 3, 9, 5, 15, 14 ],
//     "hId" : 18,
//     "hName" : "Aruna Asaf Ali Govt. Hospital",
//     "link" : "https://goo.gl/maps/s71RyVs2R2T2",
//     "hospLink" :"http://health.delhigovt.nic.in/wps/wcm/connect/DOIT_Aruna/aruna_hospital/home",
//     "imageURL": "images/hospImages/arunaAsafAli.jpg",
// })

// hospital66.save().then(() => {

// }).catch((e) => {

// })

// const hospital7700 = new Hospital({
//     "address" : "PitamPura, Delhi-110034",
//     "beds" : 79,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01125494073",
//     "depts" : [ 15, 10, 7, 4 ],
//     "hId" : 19,
//     "hName" : "Bhagwan Mahaveer Hospital ",
//     "link" : "https://goo.gl/maps/s71RyVs2R2T2",
//     "hospLink" :"https://www.nhp.gov.in/hospital/bhagwan-mahavir-hospital-north_west-delhi",
//     "imageURL": "images/hospImages/bhagwanMahaveer.jpg",
// })

// hospital7700.save().then(() => {
//     console.log("ok");
// }).catch((e) => {

// })

//module.exports = Hospital;

const mongoose = require('mongoose');

const Hospital = mongoose.model('Hospital', {
    address: {
        type: String,
        trim: true
    },
    beds: {
        type: Number,
        trim: true
    },
    bedsAvailable: {
        type: Number,
        trim: true
    },
    maxAppointment: {
        type: Number,
        trim: true
    },
    contact: {
        type: String,
        trim: true
    },
    depts: {
        type: [Number],
    },
    hId: {
        type: Number,
        required: true,
        trim: true
    },
    hName: {
        type: String,
        required: true,
        trim: true
    },
    link:{                  //google map link
        type: String,
        trim: true
    },
    hospLink: {
        type: String,
        trim: true
    },
    imageURL: {
        type: String,
        trim: true
    },
    locationFinder: {
        storeId : {
            type: String,
            required: [true, 'Please add a store ID'],
            unique: true,
            trim: true,
            maxlength: [10, 'store id must be less than equal to 10 character']
        },
        // address : {
        //     type: String,
        //     required: [true, 'please add an address']
        // },
        location: {
            type: {
              type: String, 
              enum: ['Point'], 
            },
            coordinates: {
              type: [Number],
              index: '2dsphere'
            },
            formattedAddress: String
          },
        createdAt: {
              type: Date,
              default: Date.now
          } 
    }
})
// const hospital = new Hospital({
//     "address" : " Ring Road, Ansari Nagar, Near AIIMS Metro Station, New Delhi, Delhi 1229",
//     "beds" : 1531,
//     "bedsAvailable" : 0,
//     "maxAppointment" : 2,
//     "contact" : "01126588500",
//     "depts" : [ 16, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19 ],
//     "hId" : 0,
//     "hName" : "All India Institute of Medical Sciences (AIIMS)",
//     "link" : "https://goo.gl/maps/PSjqbKEDUU52",
//     "hospLink" :"https://www.aiims.edu/en.html",
//     "imageURL": "images/hospImages/aiims.jpg",
//     "locationFinder": {
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             77.13584,
//             28.6676
//           ],
//           "formattedAddress": "Ring Road, New Delhi, Delhi 110015, IN"
//         },
//         "_id": "5fedab683e515523fc0b7a6e",
//         "storeId": "0001",
//         "createdAt": "2020-12-31T10:43:52.470Z",
        
//       }

// })

// hospital.save().then(() => {
    
// }).catch((e) => {

// })

// const hospital1 = new Hospital({
//     "address" : "Safdarjung Campus, Ansari Nagar West, New Delhi, Delhi 1229",
//     "beds" : 1331,
//     "bedsAvailable" : 0,
//     "maxAppointment" : 2,
//     "contact" : "01123230788",
//     "depts" : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 11 ],
//     "hId" : 1,
//     "hName" : "Safdarjung Hospital",
//     "link" : "https://goo.gl/maps/KVxrkZBmHM92",
//     "hospLink" : "http://www.vmmc-sjh.nic.in/",
//     "imageURL": "images/hospImages/safdarjung.jpg",
//     "locationFinder":{
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             77.20615,
//             28.564
//           ],
//           "formattedAddress": ", New Delhi, Delhi, IN"
//         },
//         "_id": "5fedab883e515523fc0b7a6f",
//         "storeId": "0002",
//         "createdAt": "2020-12-31T10:44:24.683Z",
        
//       }
// })

// hospital1.save().then(() => {

// }).catch((e) => {

// })

// const hospital2 = new Hospital({
//     "address" : "Delhi Gate, Nehru Marg, Daryaganj, New Delhi, Delhi 110002",
//     "beds" : 800,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01123230733",
//     "depts" : [ 1, 2, 3, 4, 5, 0 ],
//     "hId" : 2,
//     "hName" : "Lok Nayak Jai Prakash Narain Hospital",
//     "link" : "https://goo.gl/maps/GStBG6DuzoT2",
//     "hospLink" :"http://tte.delhigovt.nic.in/wps/wcm/connect/DoIT_LNJP/lnjp/home",
//     "imageURL": "images/hospImages/lokNayak.jpg",
//     "locationFinder":{
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             77.221939,
//             28.651718
//           ],
//           "formattedAddress": ", Delhi, Delhi 110006, IN"
//         },
//         "_id": "5fedaba53e515523fc0b7a70",
//         "storeId": "0003",
//         "createdAt": "2020-12-31T10:44:53.907Z",
        
//       }

// })

// hospital2.save().then(() => {

// }).catch((e) => {

// })

// const hospital3 = new Hospital({
//     "address" : " Jawaharlal Nehru Marg, New Delhi, Delhi 110002",
//     "beds" : 443,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01122586262",
//     "depts" : [ 1, 2, 4, 0, 8, 11 ],
//     "hId" : 3,
//     "hName" : "G.B. Pant Hospital",
//     "link" : "https://goo.gl/maps/KeCt7Wg8kow",
//     "hospLink" :"http://gbpant.delhigovt.nic.in/wps/wcm/connect/doit_gbph/GBPH/Home/",
//     "imageURL": "images/hospImages/gbPant.jpg",
//     "locationFinder":{
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             77.231624,
//             28.640774
//           ],
//           "formattedAddress": "Jawaharlal Nehru Marg, Delhi, Delhi 110092, IN"
//         },
//         "_id": "5fedabb63e515523fc0b7a71",
//         "storeId": "0004",
//         "createdAt": "2020-12-31T10:45:10.206Z",
        
//       }
// })

// hospital3.save().then(() => {

// }).catch((e) => {

// })

// const hospital4 = new Hospital({
//     "address" : "Guru Teg Bahadur Hospital, Dilshad Garden, Delhi, 110095",
//     "beds" : 143,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01122586262",
//     "depts" : [ 2, 4, 8, 11, 6, 13 ],
//     "hId" : 4,
//     "hName" : "Guru Teg Bahadur Hospital",
//     "link" : "https://goo.gl/maps/msW8sbU6BD82",
//     "hospLink" :"http://health.delhigovt.nic.in/wps/wcm/connect/doit_gtbh/GTBH/Home/General+Information",
//     "imageURL": "images/hospImages/GTB.jpg",
//     "locationFinder":{
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             77.31428,
//             28.6797
//           ],
//           "formattedAddress": "Guru Tegh Bahadur Road, New Delhi, Delhi 110095, IN"
//         },
//         "_id": "5fedabca3e515523fc0b7a72",
//         "storeId": "0005",
//         "createdAt": "2020-12-31T10:45:30.680Z",
        
//       }
// })

// hospital4.save().then(() => {

// }).catch((e) => {

// })

// const hospital5 = new Hospital({
//     "address" : "Patel Nagar New Delhi-110008",
//     "beds" : 276,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01125885944",
//     "depts" : [ 2, 4, 8, 18, 16 ],
//     "hId" : 5,
//     "hName" : "Sardar Vallabh Bhai Patel Hospital",
//     "link" : "https://goo.gl/maps/ch3N8JAyWHK2",
//     "hospLink" :"http://health.delhigovt.nic.in/wps/wcm/connect/doit_svbph/SVBPH/Home/Service+Available",
//     "imageURL": "images/hospImages/svp.jpg",
//     "locationFinder":{
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             -80.168389,
//             36.106926
//           ],
//           "formattedAddress": "[3500 - 3599] New Delhi Dr, 110008 PATEL, Winston Salem, NC 27101, US"
//         },
//         "_id": "5fedabe13e515523fc0b7a73",
//         "storeId": "0006",
//         "createdAt": "2020-12-31T10:45:53.987Z",
        
//       }
// })

// hospital5.save().then(() => {

// }).catch((e) => {

// })

// const hospital6 = new Hospital({
//     "address" : "Malviya Nagar New Delhi-110017",
//     "beds" : 400,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01126680603",
//     "depts" : [ 4, 8, 18, 16 ],
//     "hId" : 6,
//     "hName" : "Pt. Madan Mohan Malviya Hospital",
//     "link" : "https://goo.gl/maps/mYvPV7sLQe22",
//     "hospLink" :"https://www.nhp.gov.in/hospital/pt-madan-mohan-malviya-hospital-south-delhi",
//     "imageURL": "images/hospImages/mmm.jpg",
//     "locationFinder":{
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             77.21219,
//             28.54003
//           ],
//           "formattedAddress": ", New Delhi, Delhi 110017, IN"
//         },
//         "_id": "5fedabfa3e515523fc0b7a74",
//         "storeId": "0007",
//         "createdAt": "2020-12-31T10:46:18.097Z",
        
//       }
// })

// hospital6.save().then(() => {

// }).catch((e) => {

// })

// const hospital7 = new Hospital({
//     "address" : "M.A.M.C. J.L. Nehru Marg, New Delhi-110002",
//     "beds" : 143,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01123233925",
//     "depts" : [ 4, 8, 18, 16 ],
//     "hId" : 7,
//     "hName" : "Maulana Azad Medical College",
//     "link" : "https://goo.gl/maps/y5YMHrDM1d82",
//     "hospLink" :"https://www.nhp.gov.in/hospital/pt-madan-mohan-malviya-hospital-south-delhi",
//     "imageURL": "images/hospImages/mamc.jpg",
//     "locationFinder":{
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             77.2235,
//             28.64494
//           ],
//           "formattedAddress": "Jawaharlal Nehru Marg, New Delhi, Delhi 110002, IN"
//         },
//         "_id": "5fedac0e3e515523fc0b7a75",
//         "storeId": "0008",
//         "createdAt": "2020-12-31T10:46:38.619Z",
        
//       }
// })

// hospital7.save().then(() => {

// }).catch((e) => {

// })

// const hospital8 = new Hospital({
//     "address" : "Khichri Pur New Delhi-110091",
//     "beds" : 600,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01122774145",
//     "depts" : [ 4, 8, 18, 16, 0 ],
//     "hId" : 8,
//     "hName" : "Lal Bahadur Shastri Hospital (L.B.S.)",
//     "link" : "https://goo.gl/maps/bXsJwtjcWGC2",
//     "hospLink" :"http://health.delhigovt.nic.in/wps/wcm/connect/doit_lbsh/LBSH/Home/",
//     "imageURL": "images/hospImages/Lbs.jpg",
//     "locationFinder":{
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             -80.168389,
//             36.106926
//           ],
//           "formattedAddress": "[3500 - 3599] New Delhi Dr, 110091 KHICHRI PUR, Winston Salem, NC 27101, US"
//         },
//         "_id": "5fedac223e515523fc0b7a76",
//         "storeId": "0009",
//         "createdAt": "2020-12-31T10:46:58.779Z",
        
//       }
// })

// hospital8.save().then(() => {

// }).catch((e) => {

// })

// const hospital9 = new Hospital({
//     "address" : "A-Block, Shalimar Bagh, Near Kela Godam, Delhi - 110088",
//     "beds" : 162,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01125885987",
//     "depts" : [ 4, 8, 18, 16, 0, 13, 11 ],
//     "hId" : 9,
//     "hName" : "Fortis Hospital",
//     "link" : "https://goo.gl/maps/9m2noCdMVzQ2",
//     "hospLink" :"https://www.fortishealthcare.com/india/fortis-flt-lt-rajan-dhall-hospital-in-vasant-kunj-delhi",
//     "imageURL": "images/hospImages/fortis.jpg",
//     "locationFinder":{
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             77.15713,
//             28.71678
//           ],
//           "formattedAddress": "Mahārājā Agrasen Mārg, Nai Dilli, Dillī 110088, IN"
//         },
//         "_id": "5fedac643e515523fc0b7a78",
//         "storeId": "0010",
//         "createdAt": "2020-12-31T10:48:04.640Z",
        
//       }
// })

// hospital9.save().then(() => {

// }).catch((e) => {

// })

// const hospital99 = new Hospital({
//     "address" : "Saket,New Delhi-110016",
//     "beds" : 189,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01125885452",
//     "depts" : [ 18, 16, 0, 13, 11, 12, 6 ],
//     "hId" : 10,
//     "hName" : "Max Super Speciality Hospital",
//     "link" : "https://goo.gl/maps/VkHJsLdAKwL2",
//     "hospLink" :"https://www.maxhealthcare.in/",
//     "imageURL": "images/hospImages/max.jpg",
//     "locationFinder":{
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             77.20613,
//             28.52215
//           ],
//           "formattedAddress": "Saket Road, New Delhi, Delhi, IN"
//         },
//         "_id": "5fedac753e515523fc0b7a79",
//         "storeId": "0011",
//         "createdAt": "2020-12-31T10:48:21.163Z",
        
//       }
// })

// hospital99.save().then(() => {

// }).catch((e) => {

// })

// const hospital999 = new Hospital({
//     "address" : "Sarita Delhi, Mathura Road,New Delhi - 110076",
//     "beds" : 234,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01126825563",
//     "depts" : [ 16, 13, 12, 6, 15, 19 ],
//     "hId" : 11,
//     "hName" : "Indraprastha Apollo Hospital",
//     "link" : "https://goo.gl/maps/NvMm7rFA5qp",
//     "hospLink" :"https://delhi.apollohospitals.com/",
//     "imageURL": "images/hospImages/ipApollo.jpg",
//     "locationFinder": {
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             -90.261108,
//             39.03167
//           ],
//           "formattedAddress": ", New Delhi, IL, US"
//         },
//         "_id": "5fedac893e515523fc0b7a7a",
//         "storeId": "0012",
//         "createdAt": "2020-12-31T10:48:41.305Z",
        
//       }
// })

// hospital999.save().then(() => {

// }).catch((e) => {

// })

// const hospital9999 = new Hospital({
//     "address" : "Block C, Shivaji Park, Punjabi Bagh, New Delhi, Delhi 110026",
//     "beds" : 105,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01126834563",
//     "depts" : [ 13, 15, 19, 10, 1, 6, 17 ],
//     "hId" : 12,
//     "hName" : "Maharaja Agrasen Hospital",
//     "link" : "https://goo.gl/maps/wz8xeyoaPTP2",
//     "hospLink" :"https://delhi.apollohospitals.com/",
//     "imageURL": "images/hospImages/maharajaAgrasen.jpg",
//     "locationFinder":{
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             77.1401,
//             28.67344
//           ],
//           "formattedAddress": "Punjabi Bagh Chowk, New Delhi, Delhi 110026, IN"
//         },
//         "_id": "5fedac983e515523fc0b7a7b",
//         "storeId": "0013",
//         "createdAt": "2020-12-31T10:48:56.885Z",
        
//       }
// })

// hospital9999.save().then(() => {

// }).catch((e) => {

// })

// const hospital11 = new Hospital({
//     "address" : "Plot No -1, Shakti Khand 3-Indirapuram, Delhi - 201014",
//     "beds" : 85,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01126834876",
//     "depts" : [ 2, 6, 9, 12 ],
//     "hId" : 13,
//     "hName" : "Healing Tree Hospital",
//     "link" : "https://goo.gl/maps/3Q2e4FExFCz",
//     "hospLink" :"http://www.healingtreehospital.com/",
//     "imageURL": "images/hospImages/healingTree.jpg",
//     "locationFinder":{
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             77.35937,
//             28.64343
//           ],
//           "formattedAddress": "1/1 Annie Besent Marg, Ghaziabad, Uttar Pradesh 201019, IN"
//         },
//         "_id": "5fedacaf3e515523fc0b7a7c",
//         "storeId": "0014",
//         "createdAt": "2020-12-31T10:49:19.860Z",
        
//       }
// })

// hospital11.save().then(() => {

// }).catch((e) => {

// })

// const hospital22 = new Hospital({
//     "address" : "Hari Nagar, New Delhi-110064",
//     "beds" : 98,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01125494337",
//     "depts" : [ 2, 6, 9, 12, 4 ],
//     "hId" : 14,
//     "hName" : "Deen Dayal Upadhyay Hospital",
//     "link" : "https://goo.gl/maps/NgMPqNurvRw",
//     "hospLink" :"http://health.delhigovt.nic.in/wps/wcm/connect/DOIT_DDUH/dduh/home",
//     "imageURL": "images/hospImages/DDU.jpg",
//     "locationFinder":{
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             -79.251697,
//             43.849503
//           ],
//           "formattedAddress": "[2 - 198] New Delhi Dr, 110064 HARI, Markham, ON L3S, CA"
//         },
//         "_id": "5fedacc13e515523fc0b7a7d",
//         "storeId": "0015",
//         "createdAt": "2020-12-31T10:49:37.957Z",
        
//       }
// })

// hospital22.save().then(() => {

// }).catch((e) => {

// })

// const hospital33 = new Hospital({
//     "address" : "Narela, Delhi-110040",
//     "beds" : 109,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01125494453",
//     "depts" : [ 0, 3, 7, 9, 11 ],
//     "hId" : 15,
//     "hName" : "Satyawadi Raja Harish Chandra Hospital",
//     "link" : "https://goo.gl/maps/oWwgFdSSTPp",
//     "hospLink" :"https://www.nhp.gov.in/hospital/satyawadi-raja-harish-chandra-hospital-north_west-delhi",
//     "imageURL": "images/hospImages/rajaHarishChandra.jpg",
//     "locationFinder":{
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             77.13561,
//             28.86112
//           ],
//           "formattedAddress": ", New Delhi, Delhi 110040, 131028, IN"
//         },
//         "_id": "5fedacd23e515523fc0b7a7e",
//         "storeId": "0016",
//         "createdAt": "2020-12-31T10:49:54.246Z",
        
//       }
// })

// hospital33.save().then(() => {

// }).catch((e) => {

// })

// const hospital44 = new Hospital({
//     "address" : "Jahangir Puri, New Delhi110033 ",
//     "beds" : 300,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01125494763",
//     "depts" : [ 0, 3, 7, 9, 11 ],
//     "hId" : 16,
//     "hName" : "Babu Jagjivan Ram Hospital",
//     "link" : "https://goo.gl/maps/x3ZQoG1B3PN2",
//     "hospLink" :"https://www.nhp.gov.in/hospital/babu-jagjivan-ram-memorial-hospital-north_west-delhi",
//     "imageURL": "images/hospImages/JagjivanRam.jpg",
//     "locationFinder":{
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             77.17074,
//             28.73198
//           ],
//           "formattedAddress": "Jahangirpuri Road, New Delhi, Delhi, IN"
//         },
//         "_id": "5fedacf13e515523fc0b7a80",
//         "storeId": "0017",
//         "createdAt": "2020-12-31T10:50:25.235Z",
        
//       }
// })

// hospital44.save().then(() => {

// }).catch((e) => {

// })

// const hospital55 = new Hospital({
//     "address" : "Sector 6, Rohini, New Delhi.-110085",
//     "beds" : 350,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01125494021",
//     "depts" : [ 0, 3, 7, 9, 11, 5 ],
//     "hId" : 17,
//     "hName" : "Baba Saheb Ambedkar Hospital",
//     "link" : "https://goo.gl/maps/1HDsGxpyicS2",
//     "hospLink" :"http://health.delhigovt.nic.in/wps/wcm/connect/DOIT_DBSAH/dbsah/home",
//     "imageURL": "images/hospImages/babaSahebAmbedkar.jpg",
//     "locationFinder":{
//       "location": {
//         "type": "Point",
//         "coordinates": [
//           -80.168389,
//           36.106926
//         ],
//         "formattedAddress": "[3500 - 3599] New Delhi Dr, 110085 SECTOR 6 ROHINI, Winston Salem, NC 27101, US"
//       },
//       "_id": "5fedad193e515523fc0b7a81",
//       "storeId": "0018",
//       "createdAt": "2020-12-31T10:51:05.281Z",
      
//     }
// })

// hospital55.save().then(() => {

// }).catch((e) => {

// })

// const hospital66 = new Hospital({
//     "address" : "Rajpur Road,Delhi.110054",
//     "beds" : 443,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01125494487",
//     "depts" : [ 0, 3, 9, 5, 15, 14 ],
//     "hId" : 18,
//     "hName" : "Aruna Asaf Ali Govt. Hospital",
//     "link" : "https://goo.gl/maps/s71RyVs2R2T2",
//     "hospLink" :"http://health.delhigovt.nic.in/wps/wcm/connect/DOIT_Aruna/aruna_hospital/home",
//     "imageURL": "images/hospImages/arunaAsafAli.jpg",
//     "locationFinder":{
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             -123.414141,
//             48.565129
//           ],
//           "formattedAddress": "[6700 - 6799] Rajpur Pl, rd delhi 110054, Brentwood Bay, BC V8M, CA"
//         },
//         "_id": "5fedad293e515523fc0b7a82",
//         "storeId": "0019",
//         "createdAt": "2020-12-31T10:51:21.623Z",
        
//       }
// })

// hospital66.save().then(() => {

// }).catch((e) => {

// })

// const hospital7700 = new Hospital({
//     "address" : "PitamPura, Delhi-110034",
//     "beds" : 79,
//     "bedsFilled" : 0,
//     "maxAppointment" : 100,
//     "contact" : "01125494073",
//     "depts" : [ 15, 10, 7, 4 ],
//     "hId" : 19,
//     "hName" : "Bhagwan Mahaveer Hospital ",
//     "link" : "https://goo.gl/maps/s71RyVs2R2T2",
//     "hospLink" :"https://www.nhp.gov.in/hospital/bhagwan-mahavir-hospital-north_west-delhi",
//     "imageURL": "images/hospImages/bhagwanMahaveer.jpg",
//     "locationFinder":{
//         "location": {
//           "type": "Point",
//           "coordinates": [
//             -79.324086,
//             43.876627
//           ],
//           "formattedAddress": "[1 - 99] Delhi Cres, 110034 PITAMPURA, Unionville, ON L3R, CA"
//         },
//         "_id": "5fedad3a3e515523fc0b7a83",
//         "storeId": "0020",
//         "createdAt": "2020-12-31T10:51:38.055Z",
        
//       }
// })

// hospital7700.save().then(() => {
//     console.log("ok");
// }).catch((e) => {

// })

module.exports = Hospital;
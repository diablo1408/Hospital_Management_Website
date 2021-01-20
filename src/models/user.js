const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password')
            }
        }
    },
    age: {
        type: Number,
        required: true,
        trim: true,
        validate(value) {
            if (value < 0) {
                throw new Error('age must be a positive number')
            }
        }
    },
    contactNo: {
        type: String,
        required: true,
        trim: true,
    },
    //this attribute will contain the list of hospitals+date the user has taken appointment into.
    hospAppointment : [String],
    docAppointment : [String]
})

//hash the plain text password before saving
// userSchema.pre('save', function(next) {
//     const user  = this;

//     if(user.isModified('password')) {
//         bcrypt.hash(user.password, 8).then((hashedPassword) => {
//             user.password = hashedPassword;
//         }).catch((error) => {
//             console.log(error);
//         })

//         next();
//     }
// })

const User = mongoose.model('User', userSchema);

module.exports = User;
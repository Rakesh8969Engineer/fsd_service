const mongoose = require('mongoose');
const validator = require('validator');
const userschema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        minLength: 3

    }, email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value))
                throw new Error("invalid Email id:-")
        }

    },

    phone: {
        type: Number,
        required: true,
        min: 8

    },
    message: {
        type: String,
        required: true,


    },
    date: {
        type: Date,
        default: Date.now


    }



});

const User = mongoose.model("Ussr", userschema);
module.exports = User;
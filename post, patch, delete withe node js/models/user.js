const mongoose = require("mongoose");


//mongoose schema

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
   
    email: {
        type: String,
        required: true,
        unique: true,
    },
    university: {
        type: String,
        required: true,
    },
    hall: {
        type: String,
    },
    gender: {
        type: String,
    },

},
{timestamps: true},
);

//model

const User = mongoose.model("user",userSchema);

 module.exports = User ;


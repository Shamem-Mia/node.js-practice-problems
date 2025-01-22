// const { Timestamp } = require("bson");
const mongoose = require("mongoose");
const { type } = require("os");

const urlSchema = new mongoose.Schema({

    shortId: {
        type: String,
        require: true,
        unique: true,
    },

    redirectURL: {
        type: String,
        require: true,
    },

    visitHistry: [{Timestamp: {type: Number}}],



},
{ timestamps: true},
);


const URL = mongoose.model('url', urlSchema);

module.exports = URL;

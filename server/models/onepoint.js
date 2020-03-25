const mongoose = require('mongoose');
const Schema = mongoose.Schema
//Schema Validation

const Onepoin = new Schema(
    {
    fx : {type: String},
    X  : {type: Number},
    },
    { timestamps: true },
)
module.exports = mongoose.model('onepoint',Onepoin);
const mongoose = require('mongoose');
const Schema = mongoose.Schema
//Schema Validation

const Secant = new Schema(
    {
    fx : {type: String},
    XO : {type: Number},
    XN : {type: Number},
    },
    { timestamps: true },
)
module.exports = mongoose.model('secant',Secant);
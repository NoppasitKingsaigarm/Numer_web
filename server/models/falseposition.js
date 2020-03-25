const mongoose = require('mongoose');
const Schema = mongoose.Schema
//Schema Validation

const FalsePo = new Schema(
    {
    fx : {type: String},
    XL : {type: Number},
    XR : {type: Number},
    },
    { timestamps: true },
)
module.exports = mongoose.model('falseposition',FalsePo);
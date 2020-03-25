const mongoose = require('mongoose');
const Schema = mongoose.Schema
//Schema Validation

const Forwardh = new Schema(
    {
    fx : {type: String},
    D  : {type: Number},
    H  : {type: Number},
    X  : {type: Number},

    },
    { timestamps: true },
)
module.exports = mongoose.model('forwardh',Forwardh);
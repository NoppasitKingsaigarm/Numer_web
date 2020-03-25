const mongoose = require('mongoose');
const Schema = mongoose.Schema
//Schema Validation

const Compotrapz = new Schema(
    {
    fx : {type: String},
    B  : {type: Number},
    A  : {type: Number},
    N  : {type: Number},

    },
    { timestamps: true },
)
module.exports = mongoose.model('compotrapz',Compotrapz);
const mongoose = require('mongoose');
const Schema = mongoose.Schema
//Schema Validation

const Newton = new Schema(
    {
    fx : {type: String},
    x  : {type: Number},
    },
    { timestamps: true },
)
module.exports = mongoose.model('newton',Newton);
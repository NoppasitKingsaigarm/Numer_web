const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://noppasit:nop0906072134@cluster0-7clan.mongodb.net/numer', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
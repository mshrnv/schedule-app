const {Schema, model} = require('mongoose')

const Selftraining = new Schema({
    username: {type: String, required: true},
    date: {type: Date, required: true},
    hours: {type: Number, required: true},
    minutes: {type: Number, required: true}

})

module.exports = model('Selftraining', Selftraining)
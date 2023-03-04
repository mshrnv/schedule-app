const {Schema, model} = require('mongoose')

const Classroom = new Schema({
    num: {type: Number, required: true, unique: true}
})

module.exports = model('Classroom', Classroom)
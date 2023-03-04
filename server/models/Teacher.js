const {Schema, model} = require('mongoose')

const Teacher = new Schema({
    fio: {type: String, required: true, unique: true}
})

module.exports = model('Teacher', Teacher)
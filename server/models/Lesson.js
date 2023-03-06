const {Schema, model} = require('mongoose')

const Lesson = new Schema({
    group: {type: String, required: true},
    teacher: {type: String, required: true},
    date: {type: Date, required: true},
    lesson_number: {type: Number, required: true},
    classroom: {type: Number, required: true},
    subject: {type: String, required: true}
})

module.exports = model('Lesson', Lesson)
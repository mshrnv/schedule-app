const Router = require('express')
const controller = require('../controllers/ClassroomsController')

const classroomsRouter = new Router()

// Classrooms API
classroomsRouter.get("", controller.getAllClassrooms)
classroomsRouter.post("", controller.newClassroom)
classroomsRouter.delete("", controller.deleteClassroom)

module.exports = classroomsRouter
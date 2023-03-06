const Router = require('express')
const controller = require('../controllers/TeachersController')

const teachersRouter = new Router()

// Teachers API
teachersRouter.get("", controller.getAllTeachers)
teachersRouter.post("", controller.newTeacher)
teachersRouter.delete("", controller.deleteTeacher)

module.exports = teachersRouter
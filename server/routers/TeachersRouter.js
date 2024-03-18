const Router = require('express')
const controller = require('../controllers/TeachersController')
const {verifyUserToken, IsAdmin} = require("../middlewares/authMiddleware");

const teachersRouter = new Router()

// Teachers API
teachersRouter.get("", verifyUserToken, controller.getAllTeachers)
teachersRouter.post("", verifyUserToken, IsAdmin, controller.newTeacher)
teachersRouter.delete("", verifyUserToken, IsAdmin, controller.deleteTeacher)

module.exports = teachersRouter
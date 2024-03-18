const Router = require('express')
const controller = require('../controllers/ClassroomsController')
const {IsAdmin, verifyUserToken} = require("../middlewares/authMiddleware");

const classroomsRouter = new Router()

// Classrooms API
classroomsRouter.get("", verifyUserToken, controller.getAllClassrooms)
classroomsRouter.post("", verifyUserToken, IsAdmin, controller.newClassroom)
classroomsRouter.delete("", verifyUserToken, IsAdmin, controller.deleteClassroom)

module.exports = classroomsRouter
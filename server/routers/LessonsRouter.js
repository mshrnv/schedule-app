const Router = require('express')
const controller = require('../controllers/LessonsController')
const {verifyUserToken, IsAdmin} = require("../middlewares/authMiddleware");

const lessonsRouter = new Router()

// Lessons CRUD API
lessonsRouter.get("", verifyUserToken, controller.getLessonsByDate)
lessonsRouter.post("", verifyUserToken, IsAdmin, controller.newLesson)
lessonsRouter.put("", verifyUserToken, IsAdmin, controller.editLesson)
lessonsRouter.delete("", verifyUserToken, IsAdmin, controller.deleteLesson)

module.exports = lessonsRouter
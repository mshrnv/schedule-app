const Router = require('express')
const controller = require('../controllers/LessonsController')

const lessonsRouter = new Router()

// Lessons CRUD API
lessonsRouter.get("", controller.getLessonsByDate)
lessonsRouter.post("", controller.newLesson)
lessonsRouter.put("", controller.editLesson)
lessonsRouter.delete("", controller.deleteLesson)

module.exports = lessonsRouter
const Router = require('express')
const controller = require('../controllers/LessonsController')

const lessonsRouter = new Router()

lessonsRouter.get("", controller.getLessons)
lessonsRouter.post("", controller.newLesson)
lessonsRouter.put("", controller.editLesson)

module.exports = lessonsRouter
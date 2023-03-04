const Router = require('express')
const controller = require('../controllers/LessonsController')

const lessonsRouter = new Router()

lessonsRouter.get("", controller.getLessons)
lessonsRouter.post("", controller.newLesson)

module.exports = lessonsRouter
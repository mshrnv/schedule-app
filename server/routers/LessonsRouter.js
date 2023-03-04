const Router = require('express')
const controller = require('../controllers/LessonsController')

const lessonsRouter = new Router()

lessonsRouter.get("", controller.getLessons)

module.exports = lessonsRouter
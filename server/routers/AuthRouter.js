const Router = require('express')
const controller = require('../controllers/AuthController')

const authRouter = new Router()

authRouter.post('/login', controller.login)

module.exports = authRouter
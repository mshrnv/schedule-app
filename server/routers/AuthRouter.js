const Router = require('express')
const controller = require('../controllers/AuthController')

const authRouter = new Router()

// Login API
authRouter.post('/login', controller.login)
authRouter.get('/check', controller.check_user)

module.exports = authRouter
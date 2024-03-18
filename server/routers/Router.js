const Router = require('express')
const controller = require('../controllers/AuthController')
const authRouter = require("./AuthRouter");
const lessonsRouter = require("./LessonsRouter");
const selftrainingsRouter = require("./SelftrainingsRouter");
const teachersRouter = require("./TeachersRouter");
const classroomsRouter = require("./ClassroomsRouter");

const router = new Router()

router.use("/auth", authRouter)
router.use("/lessons", lessonsRouter)
router.use("/selftrainings", selftrainingsRouter)
router.use("/teachers", teachersRouter)
router.use("/classrooms", classroomsRouter)

module.exports = router
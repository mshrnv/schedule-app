const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config(); // For .env files

// Routers import
const authRouter = require("./routers/AuthRouter")
const lessonsRouter = require("./routers/LessonsRouter")
const selftrainingsRouter = require("./routers/SelftrainingsRouter")
const teachersRouter = require('./routers/TeachersRouter')
const classroomsRouter = require('./routers/ClassroomsRouter')

// Server port
const EXPRESS_PORT = process.env.EXPRESS_PORT || 5000
const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongo-db:27017/27unc'

// Express app
const app = express()

// Query body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// CORS
app.use(cors())

// Routes
app.use("/auth", authRouter)
app.use("/lessons", lessonsRouter)
app.use("/selftrainings", selftrainingsRouter)
app.use("/teachers", teachersRouter)
app.use("/classrooms", classroomsRouter)


const start = () => {
    try {
        mongoose.connect(MONGO_URL)
        app.listen(EXPRESS_PORT, () => console.log(`Server started\nPort: ${EXPRESS_PORT}`))
    } catch (e) {

    }
}

start()

module.exports = app
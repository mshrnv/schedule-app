const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config(); // For .env files

// Routers import
const mainRouter = require("./routers/Router")

// Server port
const EXPRESS_PORT = process.env.EXPRESS_PORT || 5000
const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongo-db:27017/27unc'

// Express app
const app = express()

// Query body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// CORS
app.use(cors())

// Routes
app.use("/api/v1", mainRouter)

const start = () => {
    try {
        mongoose.connect(MONGO_URL)
        app.listen(EXPRESS_PORT, () => console.log(`🚀 Server started on port: ${EXPRESS_PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

module.exports = app
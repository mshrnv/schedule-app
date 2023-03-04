const Lesson = require('../models/Lesson')

class LessonsController {
    async getLessons(req, res) {
        try {

            const {date} = req.body

            const result = await Lesson.find({
                date: date
            })

            res.status(200).json({
                message: '[GET] Lessons success',
                data: result
            })
        } catch (e) {
            res.status(404).json({
                message: "[GET] Lessons error"
            })
            console.log(e)
        }
    }
}

module.exports = new LessonsController()
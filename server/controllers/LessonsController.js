const Lesson = require('../models/Lesson')

class LessonsController {
    async getLessons(req, res) {
        try {

            const {date} = req.body

            const result = await Lesson.find({
                date: date
            })

            res.status(200).json({
                isError: false,
                message: '[GET] Lessons success',
                data: result
            })
        } catch (e) {
            res.status(404).json({
                isError: true,
                message: "[GET] Lessons error"
            })
            console.log(e)
        }
    }

    async newLesson(req, res) {
        try {
            const data = req.body

            const doc = new Lesson(data);
            await doc.save();

            res.status(200).json({
                isError: false,
                message: "Занятие добавлено"
            })
        } catch (e) {
            res.status(404).json({
                isError: true,
                message: "Ошибка добавления занятия"
            })
            console.log(e)
        }
    }

    async editLesson(req, res) {
        try {
            const {filter, update} = req.body

            await Lesson.findOneAndUpdate(filter, update)

            res.status(200).json({
                isError: false,
                message: "Занятие отредактировано"
            })
        } catch (e) {
            res.status(404).json({
                isError: true,
                message: "Ошибка редактирования занятия"
            })
            console.log(e)
        }
    }

    async deleteLesson(req, res) {
        try {
            const {filter} = req.body
            const doc = await Lesson.findOne(filter)
            await doc.deleteOne()

            res.status(200).json({
                isError: false,
                message: "Занятие удалено"
            })
        } catch (e) {
            res.status(404).json({
                isError: true,
                message: "Ошибка удаления занятия"
            })
            console.log(e)
        }
    }
}

module.exports = new LessonsController()
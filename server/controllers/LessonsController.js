const Lesson = require('../models/Lesson')

class LessonsController {
    /**
     * GET query to get all lessons at <req.body.date>
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async getLessonsByDate(req, res) {
        try {

            const {date} = req.query

            const result = await Lesson.find({
                date
            })

            res.status(200).json({
                isError: false,
                message: 'Список занятий',
                data: result
            })
        } catch (e) {
            res.status(200).json({
                isError: true,
                message: "Ошибка получения списка занятий"
            })
            console.log(e)
        }
    }

    /**
     * POST query to create lesson in database
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async newLesson(req, res) {
        try {
            const {data} = req.body

            const doc = new Lesson(data);
            await doc.save();

            res.status(200).json({
                isError: false,
                message: "Занятие добавлено"
            })
        } catch (e) {
            res.status(200).json({
                isError: true,
                message: "Ошибка добавления занятия"
            })
            console.log(e)
        }
    }

    /**
     * PUT query to update lesson info in database
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async editLesson(req, res) {
        try {
            const {filter, update} = req.body

            await Lesson.findOneAndUpdate(filter, update)

            res.status(200).json({
                isError: false,
                message: "Занятие отредактировано"
            })
        } catch (e) {
            res.status(200).json({
                isError: true,
                message: "Ошибка редактирования занятия"
            })
            console.log(e)
        }
    }

    /**
     * DELETE query to remove lesson from database
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
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
            res.status(200).json({
                isError: true,
                message: "Ошибка удаления занятия"
            })
            console.log(e)
        }
    }
}

module.exports = new LessonsController()
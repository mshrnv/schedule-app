const Classroom = require('../models/Classroom')

class ClassroomsController {
    /**
     * GET query to get list of all classrooms
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async getAllClassrooms(req, res) {
        try {
            const result = await Classroom.find({})

            res.status(200).json({
                isError: false,
                message: 'Список аудиторий',
                data: result
            })
        } catch (e) {
            res.status(404).json({
                isError: true,
                message: "Ошибка получения списка аудиторий"
            })
            console.log(e)
        }
    }

    /**
     * POST query to add new classroom
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async newClassroom(req, res) {
        try {
            const {data} = req.body

            const doc = new Classroom(data);
            await doc.save();

            res.status(200).json({
                isError: false,
                message: "Аудитория успешно добавлена"
            })
        } catch (e) {
            res.status(404).json({
                isError: true,
                message: "Ошибка добавления аудитории"
            })
            console.log(e)
        }
    }

    /**
     * DELETE query to delete classroom
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async deleteClassroom(req, res) {
        try {
            const {filter} = req.body

            const doc = await Classroom.findOne(filter)
            await doc.deleteOne()

            res.status(200).json({
                isError: false,
                message: "Аудитория удалена"
            })
        } catch (e) {
            res.status(404).json({
                isError: true,
                message: "Ошибка удаления аудитории"
            })
            console.log(e)
        }
    }
}

module.exports = new ClassroomsController()
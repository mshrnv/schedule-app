const Teacher = require("../models/Teacher")

class TeachersController {
    /**
     * GET query to get list of all teachers
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async getAllTeachers(req, res) {
        try {
            const result = await Teacher.find({})

            res.status(200).json({
                isError: false,
                message: 'Список преподавателей',
                data: result
            })
        } catch (e) {
            res.status(200).json({
                isError: true,
                message: "Ошибка получения списка преподавателей"
            })
            console.log(e)
        }
    }

    /**
     * POST query to add new teacher
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async newTeacher(req, res) {
        try {
            const {data} = req.body

            const doc = new Teacher(data);
            await doc.save();

            res.status(200).json({
                isError: false,
                message: "Преподаватель успешно добавлен"
            })
        } catch (e) {
            res.status(200).json({
                isError: true,
                message: "Ошибка добавления преподавателя"
            })
            console.log(e)
        }
    }

    /**
     * DELETE query to delete teacher
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async deleteTeacher(req, res) {
        try {
            const {filter} = req.body

            const doc = await Teacher.findOne(filter)
            await doc.deleteOne()

            res.status(200).json({
                isError: false,
                message: "Преподаватель удален"
            })
        } catch (e) {
            res.status(200).json({
                isError: true,
                message: "Ошибка удаления преподавателя"
            })
            console.log(e)
        }
    }
}

module.exports = new TeachersController()
const Selftraining = require('../models/Selftraining')

class SelftrainingsController {
    /**
     * GET query to get all selftrainings appointments at date
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async getSelftrainings(req, res) {
        try {
            const {date} = req.body

            const result = await Selftraining.find({
                date: date
            })

            res.status(200).json({
                isError: false,
                message: 'Список самоподготовки',
                data: result
            })
        } catch (e) {
            res.status(404).json({
                isError: true,
                message: "Ошибка получения списка самоподготовки"
            })
            console.log(e)
        }
    }

    /**
     * GET query to get all user's appointments starts with today
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async getUserSelftrainings(req, res) {
        try {
            const {username} = req.query

            const _result = await Selftraining.find({
                username: username,
                date: {
                    $gte: new Date().toISOString().slice(0, 10)
                }
            })

            let result = [];

            for (const item of _result) {
                const count = (await Selftraining.find({date: item.date})).length
                result.push({...item._doc, todayCount: count})
            }

            res.status(200).json({
                isError: false,
                message: 'Список самоподготовки пользователя',
                data: result
            })
        } catch (e) {
            res.status(404).json({
                isError: true,
                message: "Ошибка получения списка самоподготовки"
            })
            console.log(e)
        }
    }

    /**
     * POST query to create selftraining appointment
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async newSelftrainings(req, res) {
        try {
            const {data} = req.body

            const doc = new Selftraining(data);
            await doc.save();

            res.status(200).json({
                isError: false,
                message: "Успешно записаны"
            })
        } catch (e) {
            res.status(404).json({
                isError: true,
                message: "Ошибка записи на самоподготовку"
            })
            console.log(e)
        }
    }

    async deleteSelftraining(req, res) {
        try {
            const {filter} = req.body

            const doc = Selftraining.findOne(filter)
            doc.deleteOne()

            res.status(200).json({
                isError: false,
                message: "Запись отменена"
            })
        } catch (e) {
            res.status(404).json({
                isError: true,
                message: "Ошибка отмены записи на самоподготовку"
            })
            console.log(e)
        }
    }
}

module.exports = new SelftrainingsController()
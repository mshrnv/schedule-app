class AuthController {
    /**
     * Login via LDAP
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async login(req, res) {
        try {
            const {username, password} = req.body

            // TODO: LDAP auth

            res.status(200).json({
                isError: false,
                success: true,
                message: "Успешно авторизован"
            })

        } catch (e) {
            res.status(404).json({
                isError: true,
                success: false,
                message: "Ошибка авторизации"
            })
            console.log(e)
        }
    }
}

module.exports = new AuthController()
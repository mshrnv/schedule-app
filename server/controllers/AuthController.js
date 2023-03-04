class AuthController {
    async login(req, res) {
        try {
            const {username, password} = req.body

            // TODO: LDAP auth

            res.status(200).json({
                message: "login success"
            })

        } catch (e) {
            res.status(404).json({
                message: "[POST] Login error"
            })
            console.log(e)
        }
    }
}

module.exports = new AuthController()
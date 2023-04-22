const ldap = require('ldap-authentication')


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

            let adminAuthenticated = await ldap.authenticate({
                ldapOpts: { url: 'ldap://dc.iksi.edu' },
                userDn: 'cn=web_portal,ou=services,ou=iksi,dc=iksi,dc=edu',
                userPassword: 'web_portal',
                userSearchBase: 'dc=iksi,dc=edu',
                usernameAttribute: 'cn',
                username: username,
            })

            const path = adminAuthenticated.distinguishedName;

            let authenticated = await ldap.authenticate({
                ldapOpts: { url: 'ldap://dc.iksi.edu' },
                userDn: path,
                userPassword: password,
            })

            res.status(200).json({
                isError: false,
                success: true,
                message: "Успешно авторизован",
                data: adminAuthenticated
            })

        } catch (e) {
            res.status(200).json({
                isError: true,
                success: false,
                message: "Ошибка авторизации",
                js_message: e
            })
            console.log(e)
        }
    }
}

module.exports = new AuthController()
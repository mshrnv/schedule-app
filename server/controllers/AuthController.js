const ldap = require('ldap-authentication')
const { sign } = require("jsonwebtoken");
const jwtSecret = require("../config");
const { verify } = require("jsonwebtoken");


class AuthController {
    /**
     * Login via LDAP
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async login(req, res) {

        // LIST OF ADMINS USERNAMES
        const ADMINS = ['admin']

        try {
            const { username, password } = req.body

            let authenticated = await ldap.authenticate({
                ldapOpts: { url: 'ldap://192.168.25.3' },
                adminDn: 'cn=web_portal,ou=services,ou=iksi,dc=iksi,dc=edu',
                adminPassword: 'web_portal',
                userSearchBase: 'ou=iksi,dc=iksi,dc=edu',
                usernameAttribute: 'cn',
                username: username,
                userPassword: password,
                groupsSearchBase: 'ou=iksi,dc=iksi,dc=edu',
                // groupClass: 'groupOfUniqueNames', 
                groupMemberAttribute: 'member',
                // groupMemberUserAttribute: 'dn' 
            })

            let roles = ['USER'];

            if (authenticated.memberOf.includes('CN=scheduler_admin,OU=admins,OU=iksi,DC=iksi,DC=edu')) {
                roles.push('ADMIN')
            }

            let payload = { username, roles: roles };
            const token = sign(payload, jwtSecret, {
                expiresIn: 86400 // 1 day
            });

            res.status(200).header("auth-token", token).json({
                isError: false,
                success: true,
                message: "Успешно авторизован",
                // data: adminAuthenticated
                data: { username, token, roles }
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


    async check_user(req, res) {
        let token = req.headers.authorization;

        try {
            // Check Bearer
            token = token.split(' ')[1] // Remove Bearer from string

            if (token === 'null' || !token) return res.status(401).json('Incorrect token');

            let verifiedUser = verify(token, jwtSecret);
            if (!verifiedUser) return res.status(200).json({
                isError: true,
                success: false,
                message: "Ошибка подтверждения!",
            })

            return res.status(200).header("auth-token", token).json({
                isError: false,
                success: true,
                message: "Успешно подтвержден",
                data: { user: verifiedUser }
            })
        } catch (error) {
            res.status(200).json({
                isError: true,
                success: false,
                message: "Ошибка подтверждения",
                js_message: error
            })
            console.log(error)
        }
    }
}

module.exports = new AuthController()
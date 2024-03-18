const jwtSecret = require("../config");
const {verify} = require("jsonwebtoken");

module.exports.verifyUserToken = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) return res.status(401).json("No token provided");

    try {
        // Check Bearer
        token = token.split(' ')[1] // Remove Bearer from string

        if (token === 'null' || !token) return res.status(401).json('Incorrect token');

        let verifiedUser = verify(token, jwtSecret);
        if (!verifiedUser) return res.status(401).json('Unauthorized request')

        req.user = verifiedUser;
        return next();
    } catch (error) {
        return res.status(400).json("Invalid Token");
    }
}

module.exports.IsAdmin = async (req, res, next) => {
    if (req.user.roles.includes('ADMIN')) {
        return next();
    }

    return res.status(401).json("Unauthorized!");
}
const Router = require('express')
const controller = require('../controllers/SelftrainingsController')
const {IsAdmin, verifyUserToken} = require("../middlewares/authMiddleware");

const selftrainingsRouter = new Router()

// Selftrainings API
selftrainingsRouter.get("", verifyUserToken, IsAdmin, controller.getSelftrainings)
selftrainingsRouter.get("/user", verifyUserToken, controller.getUserSelftrainings)
selftrainingsRouter.post("", verifyUserToken, controller.newSelftrainings)
selftrainingsRouter.delete("", verifyUserToken, controller.deleteSelftraining)

module.exports = selftrainingsRouter
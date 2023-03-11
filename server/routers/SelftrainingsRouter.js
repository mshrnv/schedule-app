const Router = require('express')
const controller = require('../controllers/SelftrainingsController')

const selftrainingsRouter = new Router()

// Selftrainings API
selftrainingsRouter.get("", controller.getSelftrainings)
selftrainingsRouter.get("/user", controller.getUserSelftrainings)
selftrainingsRouter.post("", controller.newSelftrainings)
selftrainingsRouter.delete("", controller.deleteSelftraining)

module.exports = selftrainingsRouter
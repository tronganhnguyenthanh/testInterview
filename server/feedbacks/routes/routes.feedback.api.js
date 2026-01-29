const feedbackController = require("../controllers/feedback.controller")
const express = require("express")
const router = express.Router()
const feedback_router_api = router.get("/feedback/list", feedbackController.getFeedback)
module.exports = feedback_router_api 
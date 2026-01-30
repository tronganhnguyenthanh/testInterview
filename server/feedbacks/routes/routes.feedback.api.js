const feedbackController = require("../controllers/feedback.controller")
const express = require("express")
const router = express.Router()
router.get("/feedback/list", feedbackController.getFeedback)
router.patch("/feedback/edit/:id", feedbackController.updateAIDraft)
router.get("/feedback/detail/:id", feedbackController.getFeedbackById)
module.exports = router 
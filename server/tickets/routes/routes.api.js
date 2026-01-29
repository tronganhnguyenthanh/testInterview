const ticketController = require("../controller/controller")
const express = require("express")
const router = express.Router()
const ticket_router_api = router.post("/add/new", ticketController.addNewTicket)
module.exports = ticket_router_api 
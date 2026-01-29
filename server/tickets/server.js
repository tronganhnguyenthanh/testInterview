const express = require("express")
const app = express()
const cors = require("cors")
const ticket_router_api = require("./routes/routes.api")
const port = 8080
app.listen(port, () => {
 console.log(`Server is listening on port ${port}`);   
})
app.use(express.json())
app.use(cors())
app.use("/api", ticket_router_api)

const express = require("express")
const app = express()
const cors = require("cors")
const feedback_router_api = require("./routes/routes.feedback.api")
const port = 8081
app.listen(port, () => {
 console.log(`Server is running on port ${port}`)   
})
app.use(express.json())
app.use(cors())
app.use("/api/v1", feedback_router_api)
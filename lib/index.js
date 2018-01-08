const express = require("express")
const api = require("./api")
const app = express()
const { DEFAULT_PORT } = require('./constants')
const PORT = process.env.PORT || DEFAULT_PORT

// ROUTES
app.use("/api", api)

// ENDPOINTS
app.get("*", (req,res) => res.status(404))

// SERVER
app.listen(PORT, () => console.log("[INFO] Listening on *:" + PORT))
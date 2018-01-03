const express = require("express")
const api = require("./api")
const app = express()
const { DEFAULT_PORT } = require('./constants')
const PORT = process.env.PORT || DEFAULT_PORT

const express = require("express");

const cors = require("cors")

const app = express()

app.use(cors({origin:"*"}))

app.use(express.json())

app.use(express.urlencoded({extended:false}))

const phoneRoutes = require("./routes/phone.routes")
app.use("/phones",phoneRoutes)

module.exports=app
//  Authentication project

import express from "express"
import web from "./routes/web.js"
import connectDB from "./db/connectdb.js"

const app = express()

const PORT = process.env.PORT || "3000"
const HOST = "localhost"
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// set view engine
app.set('view engine', 'ejs')

// connect to DB.
connectDB(DATABASE_URL)

// urlencoded middleware for req.body 
app.use(express.urlencoded({extended : true}))



//  load router
app.use("/", web)


app.get("*", (req, res) => {
    res.status("404").render("error")
})


app.listen(PORT, HOST, () => {
    console.log(`Listening on the port : ${PORT}`)
})
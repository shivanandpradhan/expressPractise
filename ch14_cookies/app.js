import express from "express"
import cookieParser from "cookie-parser"
import web from "./routes/web.js"

const app = express()

const PORT = process.env.PORT || "3000"
const HOST = "localhost"


app.use(cookieParser())

app.use(web)


app.listen(PORT, HOST, () => {
    console.log(`Listening on the Port : ${PORT}`)
})
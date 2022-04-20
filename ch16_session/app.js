import express from 'express'
import session from 'express-session'
import web from './routes/web.js'

const PORT = process.env.PORT || "3000"
const HOST = "localhost"

const app = express()

// session middleware
app.use(session({
    secret : "adfjaleoiffiqwzoeqrivo",
    resave : false,
    saveUninitialized : true,
    cookie : {maxAge : 60000}
}))

// register a module
app.use("/", web)

app.listen(PORT, HOST, () => {
    console.log(`Listening on the port ${PORT}`);
}) 
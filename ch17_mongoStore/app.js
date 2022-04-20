import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import connectDB  from './db/connectdb.js'
import web from './routes/web.js'

const PORT = process.env.PORT || "3000"
const HOST = 'localhost'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

const app = express()

connectDB(DATABASE_URL)

// session storage object
const sessionStorage = MongoStore.create({
    mongoUrl : DATABASE_URL,
    dbName : 'cartdb',
    collectionName : 'cart',
    ttl : 14*24*60*60
})

// middleware
app.use(session({
    name : "session-project",
    secret : "zuomvjojafzojgoiquroiq",
    resave : false,
    saveUninitialized : true,
    store : sessionStorage
}))

// registering a router module.
app.use('/', web)

app.listen(PORT, HOST, () => {
    console.log(`Listening on the Port : ${PORT}`)
})
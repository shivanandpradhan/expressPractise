import dotenv from 'dotenv'
dotenv.config()

import express from "express"
import connectDB from './db/connectdb.js'
import createDoc from "./model/Employee.js"

const PORT = process.env.PORT
const HOST = process.env.HOST
const DATABASE_URL = process.env.DATABASE_URL

const app = express()

connectDB(DATABASE_URL)

// // create a Document..
// createDoc(135, "anuj mahto", 31, 18333.45, ["reading"], [{value : "he is so clever and hard working."}])

app.listen(PORT, HOST, () => {
    console.log(`Listening on the port : ${PORT}`)
})
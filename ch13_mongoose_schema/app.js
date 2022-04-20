
import express from "express"
import connectDB from './db/connectdb.js'
import createDoc from "./model/Employee.js"

const PORT = process.env.PORT || "3000"
const HOST = "localhost"
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

const app = express()

connectDB(DATABASE_URL)
createDoc(125, "manoj mahto", 31, 18333.45, ["playing",'music', "reading"], [{value : "he is so clever and hard working."}])

app.listen(PORT, HOST, () => {
    console.log(`Listening on the port : ${PORT}`)
})
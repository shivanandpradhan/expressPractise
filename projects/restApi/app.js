import dotenv from "dotenv";
dotenv.config(); // configure .env file.

import express from "express";
import connectDB from "./db/connectdb.js";
import web from './routes/web.js'

// server instance.
const app = express();

// constants.
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const DATABASE_URL = process.env.DATABASE_URL;

// connecting to mongodb.
connectDB(DATABASE_URL);

app.use(express.json())

// registering router
app.use("/api", web)

// listening on the port.
app.listen(PORT, HOST, () => {
  console.log(`Listening on the PORT : ${PORT}`);
});

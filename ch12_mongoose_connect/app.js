
import express from "express"
import connectDB from "./db/connectdb.js";

const PORT = process.env.PORT || "3000";
const HOST = "localhost";

const app = express();

// connect to db.

// mongoose.connect("mongodb://localhost:27017/schooldb")
// .then(() => {
//     console.log("connected successfully")
// })
// .catch( err => console.log(err));


// // connect to db
// const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017'
// connectDB(DATABASE_URL)

// // connect to db
// const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://shiva:123456@localhost:27017/schooldb?authSource=schooldb'
// connectDB(DATABASE_URL)


// connect to db using options
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017'
connectDB(DATABASE_URL)

// listening on port
app.listen(PORT, HOST, () => {
    console.log(`Listening on port : ${PORT}`);
})


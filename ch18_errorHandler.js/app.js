
import express from "express" 
import ErrorHandler from "./errors/errorHandlers.js";
import web from './routes/web.js'

const app = express();

// defining port and host
const PORT = process.env.PORT || "3000";
const HOST = "localhost";

// // request 
// app.get("/", (req, res) => {

//     // throw Error("not found")
//     res.send("<h1> Home Page </h1>")
// })

// registering router module.
app.use("/", web)


// error handling... 

// // error handling middleware
// app.use((err, req, res, next) => {
//     console.log(err)
//     next()
// })

app.use((err, req, res, next) => {
    console.log(err)
    if (err instanceof ErrorHandler) {
        res.status(err.status).json({
            "error" : {
                "message" : err.message,
                "status" : err.status
            }
        })
    }else{
        res.status(400).json({
            "error" : {
                "message" : "Server Error",
                "status" : 400
            }
        })
    }
})


// listening on port
app.listen(PORT, HOST, () => {
    console.log(`Listening on port : ${PORT}`);
})



import express from "express" 
import homeRouter from "./routes/home.js"
import stuRouter from "./routes/student.js"

const PORT = process.env.PORT || "3000";
const HOST = "localhost";

const app = express();

// application middleware

// no mount path.
app.use((req, res, next) => {
    console.log("Application Level Middleware with no mount path")
    console.log("Executed Every time for the request.")
    console.log('--------------------------------------')
    next()
})

// // mount path
// app.use('/student', (req, res, next) => {
//     console.log("App level middleware with mount path.")
//     console.log("executed on /student path every time.")
//     console.log("+++++++++++++++++++++++++++++++++")
//     next()
// })


// setting views
app.set('views', './views');

// set template engine
app.set('view engine', 'ejs')

// static middle ware
// app.use(express.static('public')) 

// virtual view path
app.use('/static', express.static('public'))


// load modules.
app.use(homeRouter)
app.use(stuRouter)

// listening on port
app.listen(PORT, HOST, () => {
    console.log(`Listening on port : ${PORT}`);
})


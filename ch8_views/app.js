
import express from "express" 
import homeRouter from "./routes/home.js"
import stuRouter from "./routes/student.js"

const app = express();

// defining port and host
const PORT = process.env.PORT || "3000";
const HOST = "localhost";

// load modules.
app.use(homeRouter)
app.use(stuRouter)

// listening on port
app.listen(PORT, HOST, () => {
    console.log(`Listening on port : ${PORT}`);
})


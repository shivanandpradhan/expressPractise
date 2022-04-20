
import express from "express" 
import homeRouter from "./routes/router.js"
import stuRouter from "./routes/student.js"

const app = express();

// defining port and host
const PORT = process.env.PORT || "3000";
const HOST = "localhost";


// loading router modules.
app.use(homeRouter);
app.use(stuRouter);

// listening on port
app.listen(PORT, HOST, () => {
    console.log(`Listening on port : ${PORT}`);
})


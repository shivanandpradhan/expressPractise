import express from "express"
import stu from "./routes/student.js"
import teacher from "./routes/teacher.js"

const PORT = process.env.PORT || "3000"
const HOST = "localhost"

const app = express()

app.get("/", (req, res) => {
    res.send("<h1> Home Page is displayed </h1>")
})

// load module
app.use("/student", stu);
app.use("/teacher", teacher);

app.listen(PORT, HOST, () => {
    console.log(`Listening on port : ${PORT}`);
})

export default app

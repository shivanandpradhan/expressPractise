
import express from "express" 

const app = express();

// defining port and host
const PORT = process.env.PORT || "3000";
const HOST = "localhost";

// request 
app.get("/", (req, res) => {
    res.send("<h1> Home Page </h1>")
});

app.get("/about", (req, res) => {
    res.send("<h1> About US </h1>");
});

app.get("/login", (req, res) => {
    res.send("Login Form");
});

// listening on port
app.listen(PORT, HOST, () => {
    console.log(`Listening on port : ${PORT}`);
})


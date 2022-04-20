import express from "express" 
import router from "./routes/router.js";

const app = express();

// defining port and host
const PORT = process.env.PORT || "3000";
const HOST = "localhost";

// home page..
app.get("/", (req, res) => {
    console.log("home page")
})

// loading router middleware.
app.use(router);

app.use("/teacher", router)

// listening on port
app.listen(PORT, HOST, () => {
    console.log(`Listening on port : ${PORT}`);
})


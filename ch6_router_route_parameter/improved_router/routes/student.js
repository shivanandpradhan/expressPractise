
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1> Student Page </h1>");
})
router.get("/info", (req, res) => {
    res.send("<h1> StudentInformation Page </h1>")
})
router.get("/info/:id", (req, res, next) => {
    console.log("authentication done");
    next();
}, (req, res) => {
    res.send(`<h1>Student Information of id : ${req.params.id}</h1>`)
})

export default router;

import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1> Teacher Page </h1>");
})
router.get("/info", (req, res) => {
    res.send("<h1> Teacher Information Page </h1>")
})
router.get("/info/:id", (req, res, next) => {
    console.log("authentication done");
    next();
}, (req, res) => {
    res.send(`<h1> Teacher Information of id : ${req.params.id}</h1>`)
})


export default router;
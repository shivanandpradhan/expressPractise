import express from "express"

const router = express.Router()

// student routes..
router.get("/student", (req, res) => {
    res.send("<h1> Student Page </h1>");
})
router.get("/stud bent/info/:id", (req, res) => {
    console.log(req.params)
    res.send(`student id : ${req.params.id}`);
})
router.get("/student/delete/:id", (req, res) => {
    res.send(`Student with id : ${req.params.id} deleted...`);
})


// teacher routes.
router.get("/", (req, res) => {
    res.send("<h1> Teacher Page </h1>");
})
router.get("/info/:id", (req, res) => {
    res.send(`Teacher id : ${req.params.id}`);
})
router.get("/delete/:id", (req, res) => {
    res.send(`Teacher with id : ${req.params.id} deleted...`);
})

export default router;
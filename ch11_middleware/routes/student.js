import express from "express"
import stuController from "../controllers/stuController.js"

const router = express.Router()


// router level middleware
// no mount path.
router.use((req, res, next) => {
    console.log()
    console.log("executed each time due to student.js.")
    console.log()
    next()
})

//mount path
router.use( '/student', (req, res, next) => {
    console.log('executed for /student in student.js')
    console.log("=====================")
    next()
} )

router.get("/student/page", stuController)

export default router
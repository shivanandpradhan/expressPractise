
import express from 'express'
import studentController from '../controllers/studentController.js'

const router = express.Router()

router.get("/", studentController.studentHomePage)

router.get("/registration", studentController.studentRegistration)
router.post("/registration", studentController.createDoc)

router.get("/login", studentController.studentLogin)
router.post("/login", studentController.authenticateStudent)

export default router

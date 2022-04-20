import express from "express"
import StudentController from "../controllers/studentController.js"

const router = express.Router()

router.get("/", StudentController.setCookie)
router.get("/cookie", StudentController.getCookie)
router.get("/cookie/delete", StudentController.clearCookie)

export default router
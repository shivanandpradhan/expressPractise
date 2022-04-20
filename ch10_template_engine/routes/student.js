import express from "express"
import stuController from "../controllers/stuController.js"

const router = express.Router()

router.get("/student", stuController)

export default router
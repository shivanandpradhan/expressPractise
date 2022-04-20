
import express from 'express'
import StudentController from '../controllers/studentController.js'

const router = express.Router()

router.post("/", StudentController.createDoc)
router.get("/", StudentController.getAllDoc)
router.get("/:id", StudentController.getSingleDocById)
router.put("/:id", StudentController.updateDocById)
router.delete("/:id", StudentController.deleteDocById)

export default router
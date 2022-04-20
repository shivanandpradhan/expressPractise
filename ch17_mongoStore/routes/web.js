import express from 'express'
import studentController from '../controllers/studentController.js'

const router = express.Router()

router.get("/", studentController.getsession)

router.get("/regenerate", studentController.regn_session)

router.get("/setSession", studentController.set_session)

router.get("/delete", studentController.delete_session)

export default router
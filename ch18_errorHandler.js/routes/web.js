import express from 'express'
import studentController from '../controllers/studentController.js'

const router = express.Router()

router.get('/', (req, res) => res.send('<h1> Home Page </h1>'))
router.get('/:name', studentController.getDetails)

export default router
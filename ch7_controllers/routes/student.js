
import express from "express"
import studentController from "../controllers/studentController.js"
import { studentControllerId } from "../controllers/studentController.js";
import { studentControllerIdName } from "../controllers/studentController.js";

const router = express.Router();

router.get("/student", studentController);
router.get("/student/:id", studentControllerId);
router.get("/student/:id/:name", studentControllerIdName);

export default router;

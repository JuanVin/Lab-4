import { Router } from "express";
import { controller } from "./controller/controller";

const router = Router();

router.get('/test', (req, res) => res.send("Hello world"))

router.get('/employee', controller.getEmployee)
router.get('/employee/:id', controller.getEmployeeById)
router.post('/insert', controller.createEmployee)
router.put('/update', controller.updateEmployee)
router.delete('/delete/:id', controller.deleteEmployee)

export default router;

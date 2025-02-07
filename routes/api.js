import express from "express";
const router = express.Router();
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";

// ============================================================User Controller
import * as UserController from "../app/controllers/UserController.js";

router.post("/registration", UserController.Registration);
router.post("/login", UserController.Login);
router.get("/profiledetails", AuthMiddleware, UserController.Profiledetails);
router.post("/profileupdate", AuthMiddleware, UserController.ProfileUpdate);
router.get("/emailverify", UserController.EmailVerify);
router.post("/codeverify", UserController.CodeVerify);
router.post("/resetpassword", UserController.ResetPassword);


// ==============================================================Create Task
import * as TaskController from "../app/controllers/TaskController.js";

router.post("/createtask", TaskController.CreteTask);
router.post("/updatetask",TaskController.UpdateTask);
router.delete("/deletetask", TaskController.DeleteTask);
router.get("/counttask", TaskController.CountTask);
router.get("tasklistbystatus", TaskController.TaskListByStatus);

export default router;

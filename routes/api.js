import express from "express";
const router = express.Router();
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";

// ============================================================User Controller
import * as UserController from "../app/controllers/UserController.js";

router.post("/registration", UserController.Registration);
router.post("/login", UserController.Login);
router.get("/profiledetails", AuthMiddleware, UserController.Profiledetails);
router.put("/profileupdate", AuthMiddleware, UserController.ProfileUpdate);
router.get("/emailverify", UserController.EmailVerify);
router.get("/users", AuthMiddleware, UserController.AllUsers);
router.post("/resetpassword", UserController.ResetPassword);
router.get("/codeverify/:email/:code", UserController.CodeVerify);
router.get("/emailverify/:email", AuthMiddleware, UserController.AllUsers);


// ==============================================================Create Task
import * as TaskController from "../app/controllers/TaskController.js";

router.get("/taskcount", AuthMiddleware, TaskController.CreteTask);
router.post("/createtask", AuthMiddleware, TaskController.CreteTask);
router.put("/updatetask/:id/:status", AuthMiddleware, TaskController.UpdateTask);
router.delete("/deletetask/:id",AuthMiddleware, TaskController.DeleteTask);
router.get("/counttask", AuthMiddleware, TaskController.CountTask);
router.get("/gettaskbystatus/:status",AuthMiddleware, TaskController.TaskListByStatus);

export default router;

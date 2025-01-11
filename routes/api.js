import express from "express";
const router = express.Router();

// ========================================User Controller========================================
import * as UserController from "../app/controllers/UserController.js";

// Registration User
router.post("/registration", UserController.Registration);
// Login User
router.post("/login", UserController.Login);
// Profile Details
router.get("/profiledetails", AuthMiddleware, UserController.Profiledetails);
// Profile Update
router.post("/profileupdate", AuthMiddleware, UserController.ProfileUpdate);
// Email Verify
router.get("/emailverify", UserController.EmailVerify);
// Code Verify
router.post("/codeverify", UserController.CodeVerify);
// Reset Password
router.post("/resetpassword", UserController.ResetPassword);

// Task Controller
import * as TaskController from "../app/controllers/TaskController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";

// ==========================================Create Task==========================================
router.post("/createtask", AuthMiddleware, TaskController.CreteTask);
// Update Task
router.get("/updatetask", AuthMiddleware, TaskController.UpdateTask);
// Delete Task
router.delete("/deletetask", AuthMiddleware, TaskController.DeleteTask);
// Count Task
router.get("/counttask", AuthMiddleware, TaskController.CountTask);
// Task List By Status
router.get("tasklistbystatus", AuthMiddleware, TaskController.TaskListByStatus);

export default router;

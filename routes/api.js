import express from "express";
const router = express.Router();

// ========================================User Controller========================================
import * as UserController from "../app/controllers/UserController.js";

// Registration User
router.post("/registration", UserController.Registration);
// Login User
router.post("/login", UserController.Login);
// Profile Details
router.get("/profiledetails", UserController.Profiledetails);
// Profile Update
router.post("/profileupdate", UserController.ProfileUpdate);
// Email Verify
router.get("/emailverify", UserController.EmailVerify);
// Code Verify
router.post("/codeverify", UserController.CodeVerify);
// Reset Password
router.post("/resetpassword", UserController.ResetPassword);

// Task Controller
import * as TaskController from "../app/controllers/TaskController.js";

// ==========================================Create Task==========================================
router.post("/createtask", TaskController.CreteTask);
// Update Task
router.get("/updatetask", TaskController.UpdateTask);
// Delete Task
router.delete("/deletetask", TaskController.DeleteTask);
// Count Task
router.get("/counttask", TaskController.CountTask);
// Task List By Status
router.get("tasklistbystatus", TaskController.TaskListByStatus);

export default router;

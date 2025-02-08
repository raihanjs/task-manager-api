import mongoose from "mongoose";
import TaskModel from "../models/TaskModel.js";

export const CreteTask = async (req, res) => {
  try {
    let user_id = req.headers["user_id"];
    let reqBody = req.body;
    reqBody.user_id = user_id;

    await TaskModel.create(reqBody);
    return res.json({
      status: "Success",
      Message: "Task Created Successfully",
    });
  } catch (err) {
    return res.json({ status: "fail", message: err.toString() });
  }
};

export const UpdateTask = async (req, res) => {
  try {
    let id = req.params.id;
    let status = req.params.status;
    let user_id = req.headers["user_id"];
      await TaskModel.updateOne(
      { _id: id },
      { status: status, user_id: user_id }
    );

    return res.json({
      status: "Success",
      Message: "Task Updated Successfully",
    });
  } catch (err) {
    return res.json({ status: "fail", message: err.toString() });
  }
};

export const DeleteTask = async (req, res) => {
  try{
    let id = req.params.id;
    let user_id = req.headers["user_id"];

    await TaskModel.deleteOne({_id: id, user_id: user_id});
    return res.json({
      status: "Success",
      Message: "Task Deleted",
    });
  }catch{
    return res.json({ status: "fail", message: err.toString() });
  }
  
};

export const TaskListByStatus = async (req, res) => {
  let status = req.params.status;
  let user_id = req.headers['user_id']

  let data = await TaskModel.find({user_id: user_id, status: status})

  return res.json({
    status: status,
    data: data,
    Message: "TaskListByStatus",
  });
};

export const CountTask = async (req, res) => {
  try{
    let user_id = req.headers['user_id'];
    let user_id_object = new mongoose.Types.ObjectId(user_id);

    
    let data = await TaskModel.aggregate([
      { $match: {user_id: user_id_object}},
      {$group: {_id: "$status", sum: {$count:{}}}}
    ])

    return res.json({
      status: "Success",
      data: data,
      Message: "Task Count",
    });
  }catch(err){
    return res.json({ status: "fail", message: err.toString() });
  }
};

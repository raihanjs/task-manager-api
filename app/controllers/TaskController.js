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
      { _id: id, user_id: user_id },
      {
        status: status,
      }
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
  return res.json({
    status: "Success",
    Message: "Task Deleted",
  });
};

export const TaskListByStatus = async (req, res) => {
  return res.json({
    status: "Success",
    Message: "TaskListByStatus",
  });
};

export const CountTask = async (req, res) => {
  return res.json({
    status: "Success",
    Message: "Task Count",
  });
};

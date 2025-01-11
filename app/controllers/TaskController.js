export const CreteTask = async (req, res) => {
  return res.json({
    status: "Success",
    Message: "Task Created Successfully",
  });
};

export const UpdateTask = async (req, res) => {
  return res.json({
    status: "Success",
    Message: "Task Updated Successfully",
  });
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

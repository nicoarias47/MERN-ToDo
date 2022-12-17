const { response } = require("express");
const SubTask = require("../models/subTask");
const Task = require("../models/task");
const { deleteTask, deleteSubTask } = require("../helpers/deleteTasks");

const getAllTasks = async (req, res = response) => {
  const { until = 10, from = 0 } = req.query;

  const queryComplete = { complete: true, state: true };
  const queryIncomplete = { complete: false, state: true };

  const [countIncompletes, tasksIncompletes, countCompletes, tasksCompletes] =
    await Promise.all([
      Task.count(queryIncomplete),
      Task.find(queryIncomplete).skip(Number(from)).limit(Number(until)),

      Task.count(queryComplete),
      Task.find(queryComplete).skip(Number(from)).limit(Number(until)),
    ]);

  res.json({
    countIncompletes,
    tasksIncompletes,
    countCompletes,
    tasksCompletes,
  });
};

const createTask = async (req, res = response) => {
  const { creationDate, state, complete, subTasks, ...body } = req.body;

  const data = {
    ...body,
    creationDate: new Date().toLocaleString(),
  };

  const task = new Task(data);

  await task.save();

  res.json({
    task_created: task,
  });
};

const getOneTask = async (req, res = response) => {
  const { id, type } = req.params;

  switch (type) {
    case "task":
      const task = await Task.findById(id);
      return res.json({ task });

    case "subtask":
      const subTask = await SubTask.findById(id);
      return res.json({ subTask });

    default:
      return res.json({
        msg: "invalid type, choice: task or subtask",
      });
  }
};

const createSubTask = async (req, res) => {
  const { creationDate, state, complete, ...body } = req.body;
  const { id } = req.params;

  const data = {
    ...body,
    creationDate: new Date().toLocaleString(),
  };

  const [newSubTask, { subTasks }] = await Promise.all([
    new SubTask(data),
    Task.findById(id),
  ]);

  const taskMother = await Task.findByIdAndUpdate(
    id,
    { subTasks: [...subTasks, newSubTask] },
    { new: true }
  );

  await Promise.all([taskMother.save(), newSubTask.save()]);

  res.json({ subTask_created: newSubTask });
};

const deleteTasks = async (req, res) => {
  const { id, type } = req.params;

  switch (type) {
    case "task":
      deleteTask(id);
      const task = await Task.findByIdAndDelete(id);
      return res.json({ task_delete: task });

    case "subtask":
      deleteSubTask(id);
      //const subTask = await SubTask.findByIdAndDelete(id);
      return res.json({ msg: "subtask_delete" });

    default:
      return res.json({
        msg: "invalid type, choice: task or subtask",
      });
  }
};

const completeTask = (req, res) => {
  res.json({ msg: "Hello world - COMPLETE/UNCOMPLETE  TASK/SUBTASK" });
};

module.exports = {
  getAllTasks,
  createTask,
  getOneTask,
  createSubTask,
  deleteTasks,
  completeTask,
};

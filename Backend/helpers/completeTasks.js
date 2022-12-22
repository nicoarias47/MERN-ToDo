const SubTask = require("../models/subTask");
const Task = require("../models/task");

const isComplete = async (id, type) => {
  switch (type) {
    case "task":
      const { complete } = await Task.findById(id);
      return !complete;
    case "subtask":
      const subTask = await SubTask.findById(id);
      return !subTask.complete;
    default:
      return res.json({
        msg: "invalid type, choice: task or subtask",
      });
  }
};

const isCompleteSubTask = async (id, complete) => {
  const { mother } = await SubTask.findById(id);
  const { subTasks } = await Task.findById(mother);

  const subTaskResult2 = subTasks.map((el) =>
    el._id.toString() === id
      ? { ...el, complete: (el.complete = complete) }
      : el
  );

  console.log(subTaskResult2);

  const task = await Task.findByIdAndUpdate(
    mother,
    { subTasks: subTaskResult2 },
    { new: true }
  );
};

module.exports = { isComplete, isCompleteSubTask };

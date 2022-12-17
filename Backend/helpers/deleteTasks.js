const SubTask = require("../models/subTask");
const Task = require("../models/task");

const deleteTask = async (id) => {
  const { subTasks } = await Task.findById(id);

  if (subTasks.length <= 0) {
    return;
  }

  for (const task of subTasks) {
    await SubTask.findByIdAndDelete(task._id);
  }
};

// constinuar, debemos buscar la subtask dentro de la task madre y eliminarla
const deleteSubTask = async (id) => {
  const task = await Task.find();

  //   task.map(({ subTasks }) => {
  //     subTasks.map(({ _id }) => {});
  //   });
};

module.exports = { deleteTask, deleteSubTask };

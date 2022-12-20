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
  return;
};

// constinuar, debemos buscar la subtask dentro de la task madre y eliminarla
const deleteSubTask = async (id) => {
  const { mother } = await SubTask.findById(id);
  const { subTasks } = await Task.findById(mother);

  const newTask = subTasks.filter((el) => el._id.toString() !== id);

  const task = await Task.findByIdAndUpdate(
    mother,
    { subTasks: newTask },
    { new: true }
  );

  return;
};

module.exports = { deleteTask, deleteSubTask };

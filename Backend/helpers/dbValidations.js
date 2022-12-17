const SubTask = require("../models/subTask");
const Task = require("../models/task");

const existIdInDb = async (id) => {
  const existTaskInDb = await Task.findById(id);
  const existSubTaskInDb = await SubTask.findById(id);

  if (!existTaskInDb && !existSubTaskInDb) {
    throw new Error(`this id does not exist in the database: ${id}`);
  }
};

const existTask = async (id) => {
  const existTaskInDb = await Task.findById(id);

  if (!existTaskInDb) {
    throw new Error(`this id does not exist in the database: ${id}`);
  }
};

const existSubTask = async (id) => {
  const existSubTaskInDb = await SubTask.findById(id);

  if (!existSubTaskInDb) {
    throw new Error(`this id does not exist in the database: ${id}`);
  }
};

module.exports = { existIdInDb, existTask, existSubTask };

const Task = require("../models/task");
const SubTask = require("../models/subTask");

const validTypes = ["task", "subtask"];

const isValidTypeID = async (req, res, next) => {
  const { id, type } = req.params;

  if (!validTypes.includes(type)) {
    return res.json({ msg: `The valid types are ${validTypes}` });
  }

  switch (type) {
    case "task":
      const task = await Task.findById(id);
      if (!task) {
        return res.json({
          msg: `this id does not exist in the database - ${type}: ${id}`,
        });
      }
      break;
    case "subtask":
      const subTask = await SubTask.findById(id);
      if (!subTask) {
        return res.json({
          msg: `this id does not exist in the database - ${type}: ${id}`,
        });
      }
      break;
    default:
      return res.json({ msg: "Error in the validation of type and id" });
  }

  next();
};

module.exports = { isValidTypeID };

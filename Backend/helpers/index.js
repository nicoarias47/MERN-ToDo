const completeTasks = require("./completeTasks");
const deleteTasks = require("./deleteTasks");
const dbValidations = require("./dbValidations");

module.exports = {
  ...completeTasks,
  ...deleteTasks,
  ...dbValidations,
};

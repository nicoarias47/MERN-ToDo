const { Schema, model } = require("mongoose");

const taskSchema = Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },

  description: {
    type: String,
    required: false,
  },

  creationDate: {
    type: String,
    required: true,
  },

  deadline: {
    type: String,
    required: false,
  },

  state: {
    type: Boolean,
    default: true,
    required: true,
  },

  complete: {
    type: Boolean,
    default: false,
    required: true,
  },

  subTasks: {
    type: Array,
    required: false,
  },
});

taskSchema.methods.toJSON = function () {
  const { __v, state, ...task } = this.toObject();
  return task;
};

module.exports = model("Task", taskSchema);

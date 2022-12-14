const { Schema, model } = require("mongoose");

const subTaskSchema = Schema({
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
});

subTaskSchema.methods.toJSON = function () {
  const { __v, state, ...subtask } = this.toObject();
  return subtask;
};

module.exports = model("SubTask", subTaskSchema);

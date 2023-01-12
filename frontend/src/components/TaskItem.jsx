import React from "react";
import Api from "../helpers/api";

const TaskItem = ({ data }) => {
  const { title, description, deadline, complete, _id } = data;

  const handleComplete = async () => {
    const type = "subtask";

    await Api.completeTask(type, _id);
  };

  return (
    <div className="bg-gray-300 my-2 p-2 flex flex-col">
      <h2>{title}</h2>
      <span>{description}</span>
      <span>{deadline}</span>
      <span>complete: {String(complete)}</span>
      <button className="bg-cyan-600 p-0.5" onClick={handleComplete}>
        complete
      </button>
    </div>
  );
};

export default TaskItem;

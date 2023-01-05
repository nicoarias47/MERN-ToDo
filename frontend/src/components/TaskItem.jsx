import React from "react";

const TaskItem = ({ data }) => {
  const { title, description, deadline, complete } = data;
  return (
    <div className="py-2">
      <h2>{title}</h2>
      <span>{description}</span>
      <span>{deadline}</span>
    </div>
  );
};

export default TaskItem;

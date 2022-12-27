import React from "react";

const ListItem = ({ data }) => {
  return (
    <div className="flex flex-row justify-between bg-indigo-200 rounded-md p-1 shadow-md">
      <div className="flex flex-row gap-2">
        <form>
          <input type="checkbox" />
        </form>
        <span>{data.title}</span>
      </div>
      <p>{data.subTasks.length}</p>
    </div>
  );
};

export default ListItem;

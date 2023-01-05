import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ data }) => {
  const { _id: idList } = data;

  return (
    <Link to={`/${idList}`}>
      <div className="flex flex-row justify-between bg-indigo-200 rounded-md p-1 shadow-md">
        <div className="flex flex-row gap-2">
          <form>
            <input type="checkbox" />
          </form>
          <span>{data.title}</span>
        </div>
        <p>{data.subTasks.length}</p>
      </div>
    </Link>
  );
};

export default ListItem;

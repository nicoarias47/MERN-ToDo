import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Api from "../helpers/api";
import TaskItem from "./TaskItem";

/* 
--::TODO::--
•Solucionar problema con el renderizado condicional de las tareas
•Investigar como desestructurar de undefined si llegara a ocurrir
*/

const SubTaskContainer = () => {
  const { idList } = useParams();
  const [list, setList] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const { task } = await Api.getListOrTask("task", idList);
      setList(task);
    };

    getTasks();
  }, [idList]);

  return (
    <div className="p-5">
      <div className="pt-4 flex flex-row justify-between">
        <h1>Tasks</h1>
        <Link
          to={`/${idList}/create_task`}
          className="bg-indigo-600 px-1 py-0.5 rounded-sm shadow-md"
        >
          +
        </Link>
      </div>
      <div>
        {list.subTasks &&
          list.subTasks.length > 0 &&
          list.subTasks.map((el) => <TaskItem key={el._id} data={el} />)}
      </div>
    </div>
  );
};

export default SubTaskContainer;

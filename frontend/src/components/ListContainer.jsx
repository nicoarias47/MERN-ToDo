import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../helpers/api";
import ListItem from "./ListItem";
import TopMenu from "./TopMenu";

const TaskContainer = () => {
  const [list, setList] = useState();
  const [isComplete, setIsComplete] = useState(false);

  const handleList = (state) => {
    if (!state) {
      return setIsComplete(false);
    }

    return setIsComplete(true);
  };

  useEffect(() => {
    const getList = async () => {
      await Api.getAllLists(0, 10).then((resp) => setList(resp));
    };

    getList();
  }, []);

  console.log(list);

  return (
    <div>
      <div className="min-h-screen bg-purple-600 flex flex-col p-4 justify-between">
        <div>
          <h2 className="pt-5">Menu</h2>
          <section className="grid grid-cols-2 gap-2">
            <TopMenu handleList={handleList} />
          </section>
          <section className="flex flex-col pt-4 gap-1">
            <p>List</p>
            {isComplete &&
              list &&
              list.tasksCompletes.map((item) => (
                <ListItem data={item} key={item._id} />
              ))}
            {!isComplete &&
              list &&
              list.tasksIncompletes.map((item) => (
                <ListItem data={item} key={item._id} />
              ))}
          </section>
        </div>
        <section className="gap-2">
          <Link to="/create_list" className="flex flex-row ">
            <p>➕</p>
            <p>Add list</p>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default TaskContainer;

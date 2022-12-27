import { Outlet } from "react-router-dom";
import TaskContainer from "../components/ListContainer";

const LayoutPublic = () => {
  return (
    <div className=" bg-gray-400 min-h-screen">
      <div className="container mx-auto px-4">
        <main className="grid grid-cols-2 gap-4">
          <TaskContainer />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutPublic;

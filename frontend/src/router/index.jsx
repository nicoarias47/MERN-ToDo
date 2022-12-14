import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import CreateList from "../components/CreateList";
import TaskContainer from "../components/TaskContainer";
import CreateSubTask from "../components/CreateTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/create_list",
        element: <CreateList />,
      },
      {
        path: "/:idList",
        element: <TaskContainer />,
      },
      {
        path: "/:idList/create_task",
        element: <CreateSubTask />,
      },
    ],
  },
]);

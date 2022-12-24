import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Home from "../views/Home";
import Task from "../views/Task";
import SubTask from "../views/SubTask";
import NotFound from "../views/NotFound";

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
        path: "/task",
        element: <Task />,
      },
      {
        path: "/subtask",
        element: <SubTask />,
      },
    ],
  },
]);

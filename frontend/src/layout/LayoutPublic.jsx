import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const LayoutPublic = () => {
  return (
    <div className=" bg-gray-400 min-h-screen">
      <div className="container mx-auto ">
        <NavBar />
        <main>
          <Outlet />
        </main>
        <footer>footer</footer>
      </div>
    </div>
  );
};

export default LayoutPublic;

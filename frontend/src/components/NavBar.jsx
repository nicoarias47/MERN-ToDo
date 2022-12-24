import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-center gap-5 text-amber-400">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/task">Task</NavLink>
        <NavLink to="/subtask">Subtask</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

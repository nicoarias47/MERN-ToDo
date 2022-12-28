import React from "react";
import { Link } from "react-router-dom";
import { icon } from "../helpers/images";

const TopMenu = ({ handleList }) => {
  return (
    <>
      <Link to="/" className="flex flex-col bg-indigo-200 rounded-md p-2">
        <div className="flex justify-between">
          <img src={icon} alt="icon" />
        </div>
        <p>Home</p>
      </Link>
      <div className="flex flex-col bg-indigo-200 rounded-md p-2">
        <div className="flex justify-between">
          <img src={icon} alt="icon" />
          <p>0</p>
        </div>
        <p>Total Task</p>
      </div>
      <button onClick={() => handleList(true)}>
        <div className="flex flex-col text-left bg-indigo-200 rounded-md p-2">
          <div className="flex justify-between">
            <img src={icon} alt="icon" />
            <p>0</p>
          </div>
          <p>Complete</p>
        </div>
      </button>
      <button onClick={() => handleList(false)}>
        <div className="flex flex-col text-left bg-indigo-200 rounded-md p-2">
          <div className="flex justify-between">
            <img src={icon} alt="icon" />
            <p>0</p>
          </div>
          <p>Uncomplete</p>
        </div>
      </button>
    </>
  );
};

export default TopMenu;

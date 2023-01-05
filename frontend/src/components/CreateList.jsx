import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../helpers/api";

const CreateTask = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmmit = async (e) => {
    e.preventDefault();

    const onSucces = () => {
      navigate("/");
    };

    const listCreated = await Api.createList(form, onSucces);
  };

  return (
    <div className="p-5">
      <div className="pt-4">
        <h1>Create list</h1>
        <form className="pt-2 flex flex-col gap-2" onSubmit={handleSubmmit}>
          <input
            type="text"
            placeholder="List name"
            name="title"
            maxLength={20}
            required
            className="rounded-md p-1"
            onChange={handleChange}
          />
          <textarea
            type="text"
            placeholder="Description, is optional"
            name="description"
            maxLength={120}
            rows="5"
            className="rounded-md p-1 resize-none"
            onChange={handleChange}
          ></textarea>
          <input
            type="submit"
            value="Create"
            className="bg-indigo-400 rounded-md p-1"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateTask;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const initialForm = {
  title: "",
  description: "",
  deadline: "",
};

const CreateSubTask = () => {
  const [form, setForm] = useState(initialForm);
  const { idList } = useParams();

  const handleChange = ({ target: { value, name } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // --TODO:--
    // funcion para crear tarea
  };

  return (
    <section className="p-5">
      <div className="pt-4 flex flex-row justify-between">
        <h1>Create task</h1>
        <Link to={`/${idList}`}>🔙</Link>
      </div>
      <div>
        <form
          className="pt-5 flex flex-col gap-3 rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              required
              className="rounded-sm"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              rows="5"
              className="rounded-sm p-1 resize-none"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="date">Deadline</label>
            <input
              type="date"
              name="date"
              className="rounded-sm"
              onChange={handleChange}
            />
          </div>
          <input type="submit" value="send" />
        </form>
      </div>
    </section>
  );
};

export default CreateSubTask;

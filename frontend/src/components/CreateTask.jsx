import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CreateSubTask = () => {
  const { idList } = useParams();

  return (
    <section className="p-5">
      <div className="pt-4 flex flex-row justify-between">
        <h1>Tasks</h1>
        <Link to={`/${idList}`}>🔙</Link>
      </div>
      <div>
        <form className="pt-5 flex flex-col gap-3 rounded-md">
          <div className="flex flex-col">
            <label htmlFor="title">title</label>
            <input type="text" name="title" required className="rounded-sm" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">description</label>
            <textarea
              type="text"
              name="description"
              className="rounded-sm"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="date">Deadline</label>
            <input type="date" name="date" className="rounded-sm" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateSubTask;

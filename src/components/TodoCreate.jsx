import React, { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length > 0) {
      createTodo(title);
      setTitle("");
    } else {
      setTitle("");
      alert("El campo no debe estar vacio");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white mt-8 overflow-hidden rounded-md py-4 flex gap-4 items-center px-4"
      >
        <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
        <input
          className="w-full text-gray-400 outline-none"
          type="text"
          placeholder="Create a new todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoCreate;

import React from "react";
import CrossIcon from "./icons/CrossIcon";
import CheckIcon from "./icons/CheckIcon";
const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  return (
    <article
      className="flex items-center justify-between gap-4 py-4 
          border-b border-b-gray-400 px-4"
    >
      <button
        className={`${
          todo.completed
            ? "flex items-center justify-center rounded-full border-2 w-5 h-5 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500"
            : "rounded-full border-2 w-5 h-5 inline-block"
        }`}
        onClick={() => updateTodo(todo.id)}
      >
        {todo.completed && <CheckIcon />}
      </button>
      <p className="text-gray-600">{todo.title}</p>
      <button className="flex-none" onClick={() => removeTodo(todo.id)}>
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;

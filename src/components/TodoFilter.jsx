import React from "react";

const TodoFilter = () => {
  return (
    <section className="container mx-auto px-4 mt-8 ">
      <div className="bg-white rounded-md px-4 flex justify-center gap-4">
        <button className="hover:text-blue-600">All</button>
        <button className="hover:text-blue-600">Active</button>
        <button className="hover:text-blue-600">Completed</button>
      </div>
    </section>
  );
};

export default TodoFilter;

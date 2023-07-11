import React from "react";
import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div
      className="bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-no-repeat bg-contain min-h-screen bg-gray-300"
    >
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.5em]">
            Todo
          </h1>
          <button>
            <MoonIcon color="#fff" />
          </button>
        </div>

        <form
          action=""
          className="bg-white mt-8 overflow-hidden rounded-md py-4 flex gap-4 items-center px-4"
        >
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type="text"
            placeholder="Create a new todo..."
          />
        </form>
      </header>
      <main className="container mx-auto px-4 mt-8 ">
        <div className="bg-white rounded-md">
          <article
            className="flex items-center gap-4 py-4 
          border-b border-b-gray-400 px-4"
          >
            <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
            <p className="text-gray-600">Complete online javascript course</p>
            <button>
              <CrossIcon />
            </button>
          </article>

          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear completed</button>
          </section>
          <section className="container mx-auto px-4 mt-8 ">
            <div className="bg-white rounded-md px-4 flex justify-center gap-4">
              <button className="hover:text-blue-600">All</button>
              <button className="hover:text-blue-600">Active</button>
              <button className="hover:text-blue-600">Completed</button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;

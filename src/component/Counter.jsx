import React, { useState } from "react";
const Counter = () => {
  const [count, setcount] = useState(0);
  const min = 0;
  const max = 20;
  function increseHandler() {
    if (count < 20) {
      setcount((prev) => prev + 1);
    }
  }
  function decreseHandler() {
    if (count > 0) {
      setcount((prev) => prev - 1);
    }
  }
  return (
    <div className="bg-neutral-800 flex justify-center items-center flex-col w-full h-screen gap-6 text-yellow-50">
      <h1 className="text-5xl font-mono">Counter App</h1>
      <h3 className="text-3xl">Count: {count}</h3>
      <div className=" flex gap-8 ">
        <button
          className="bg-white text-black px-4 py-2 text-xl rounded-lg"
          onClick={increseHandler}
        >
          Increase
        </button>
        <button
          className="bg-white text-black px-4 py-2 text-xl rounded-lg"
          onClick={decreseHandler}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;

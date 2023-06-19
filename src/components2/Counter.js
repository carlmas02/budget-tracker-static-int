import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <input
        placeholder="Enter a username"
        onChange={(event) => {
          console.log(event);
        }}
      />
    </div>
  );
};

export default Counter;

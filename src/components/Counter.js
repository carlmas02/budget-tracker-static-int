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
      <br />
      <input
        placeholder="Enter a username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      {username}
    </div>
  );
};

export default Counter;

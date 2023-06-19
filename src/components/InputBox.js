import React from "react";

const InputBox = () => {
  const handleClick = () => {
    const inputBox = document.getElementById("amount");
    alert(inputBox.value);
  };

  return (
    <div className="input-box">
      <h1>Budget Tracker</h1>
      <input placeholder="Enter an amount" id="amount" />
      <br />
      <input type="radio" name="category" />
      <label>Expense</label>
      <br />
      <input type="radio" name="category" />
      <label>Earnings</label>
      <br />

      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default InputBox;

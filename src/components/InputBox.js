import React from "react";

const InputBox = (props) => {
  const handleClick = () => {
    // console.log(props.amount, props.category);
    const tempObj = { amount: props.amount, category: props.category };
    // console.log(props.transaction);
    props.setTransactions([...props.transactions, tempObj]);
  };

  return (
    <div className="input-box">
      <h1>Budget Tracker</h1>

      {/* {props.amount} */}

      <input
        type="number"
        placeholder="Enter an amount"
        id="amount"
        onChange={(event) => {
          props.setAmount(event.target.value);
        }}
      />
      <br />
      <input
        type="radio"
        name="category"
        onChange={() => {
          props.setCategory("expense");
        }}
      />
      <label>Expense</label>
      <br />
      <input
        type="radio"
        name="category"
        onChange={() => {
          props.setCategory("earning");
        }}
      />
      <label>Earnings</label>
      <br />

      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default InputBox;

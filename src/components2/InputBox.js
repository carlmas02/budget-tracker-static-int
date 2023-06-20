const InputBox = (props) => {
  const performTask = () => {
    const newObj = { amount: props.amount, category: props.category };

    const newTransactions = [newObj, ...props.transactions];
    props.setTransactions(newTransactions);
  };

  return (
    <div className="input-box">
      <h1>Budget Tracker</h1>
      {props.amount}
      <input
        type="number"
        placeholder="Enter an amount"
        id="input-box"
        onChange={(event) => {
          props.setAmount(event.target.value);
        }}
      />
      <br />
      {props.category}
      <input
        type="radio"
        name="category"
        onChange={() => {
          props.setCategory("expense");
        }}
      />{" "}
      <label>Expense</label>
      <br />
      <input
        type="radio"
        name="category"
        onChange={() => {
          props.setCategory("saving");
        }}
      />{" "}
      <label>Saving</label>
      <br />
      <button onClick={performTask}>Submit</button>
    </div>
  );
};

export default InputBox;

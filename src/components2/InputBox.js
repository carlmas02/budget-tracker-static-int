const InputBox = (props) => {
  const performTask = () => {
    const inputData = document.getElementById("input-box");

    if (inputData.value === "") {
      alert("Please enter an amount !");
      return;
    }

    alert(inputData.value);
  };

  return (
    <div className="input-box">
      <h1>Budget Tracker</h1>
      {props.amount}
      <input
        placeholder="Enter an amount"
        id="input-box"
      onChange={(event) => {
          props.setAmount(event.target.value);
        }}
      />
      <br />
      <input type="radio" name="category"  /> <label>Expense</label>
      <br />
      <input type="radio" name="category" /> <label>Saving</label>
      <br />
      <button onClick={performTask}>Submit</button>
    </div>
  );
};

export default InputBox;

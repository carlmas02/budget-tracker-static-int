const InputBox = () => {
  const performTask = () => {
    const inputData = document.getElementById("input-box");

    if(inputData.value===""){
        alert("Please enter an amount !");
        return;
    }

    alert(inputData.value);
  };

  return (
    <div>
      <h1>Budget Tracker</h1>
      <input placeholder="Enter an amount" id="input-box" />
      <br />
      <input type="radio" name="category" /> <label>Expense</label>
      <br />
      <input type="radio" name="category" /> <label>Saving</label>
      <br />
      <button onClick={performTask}>Submit</button>
    </div>
  );
};

export default InputBox;

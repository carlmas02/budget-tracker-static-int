const Tile = (props) => {
  const deleteTransaction = () => {
    console.log(props.transactions);
    const newTransactions = props.transactions.filter((item, id) => {
      if (id === props.index) {
        return false;
      } else {
        return true;
      }
    });

    props.setTransactions(newTransactions);
  };

  const updateTransaction = () => {
    const newAmount = prompt("Please enter the amount to update ");
    console.log(newAmount);

    const newTransactions = props.transactions.map((item, id) => {
      if (props.index === id) {
        return { ...item, amount: newAmount };
      } else {
        return item;
      }
    });

    props.setTransactions(newTransactions);
  };

  return (
    <div className="tile">
      Rs {props.transaction.amount}/- {props.transaction.category}{" "}
      <button onClick={deleteTransaction}>Delete Transaction</button>
      <button onClick={updateTransaction}>Update Transaction</button>
    </div>
  );
};

export default Tile;

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

  return (
    <div className="tile">
      Rs {props.transaction.amount}/- {props.transaction.category}{" "}
      <button onClick={deleteTransaction}>Delete Transaction</button>
    </div>
  );
};

export default Tile;

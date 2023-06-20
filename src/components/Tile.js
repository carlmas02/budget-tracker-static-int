import React from "react";

const Tile = (props) => {
  return (
    <div className="tile">
      Rs {props.transaction.amount}/- {props.transaction.category}{" "}
      <button
        onClick={() => {
          props.deleteTransaction(props.index);
        }}
      >
        Delete transaction
      </button>
      <button
        onClick={() => {
          props.updateTransaction(props.index);
        }}
      >
        Update transaction
      </button>
    </div>
  );
};

export default Tile;

import React from "react";

const Tile = (props) => {
  return (
    <div className="tile">
      Rs {props.transaction.amount}/- {props.transaction.category}{" "}
    </div>
  );
};

export default Tile;

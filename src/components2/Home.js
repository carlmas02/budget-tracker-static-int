import Tile from "./Tile";
import InputBox from "./InputBox";
import { useEffect, useState } from "react";

function Home() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const renderTile = (transaction, index) => {
    return (
      <Tile
        transaction={transaction}
        key={index}
        index={index}
        transactions={transactions}
        setTransactions={setTransactions}
      />
    );
  };

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="App">
      <InputBox
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
        transactions={transactions}
        setTransactions={setTransactions}
      />
      {transactions.map(renderTile)}
      {/* <Counter /> */}
    </div>
  );
}

export default Home;

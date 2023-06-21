import Tile from "./Tile";
import InputBox from "./InputBox";
import Counter from "./Counter";
import { useEffect, useState } from "react";

function Home() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  ); // [{...},{...}]
  const [amount, setAmount] = useState(""); // eg. 300
  const [category, setCategory] = useState(""); // expense or saving

  const updateTransaction = (id) => {
    console.log(id);

    const updatedAmount = prompt(
      "Please enter the amount you want to update ?"
    );

    const newTransactions = transactions.map((item, index) => {
      if (index === id) {
        return { ...item, amount: updatedAmount };
      } else {
        return item;
      }
    });

    setTransactions(newTransactions);
  };

  const deleteTransaction = (id) => {
    console.log(id);
    console.log(transactions);
    const newTransactions = transactions.filter((item, index) => {
      if (index === id) {
        return false;
      } else {
        return true;
      }
    });

    setTransactions(newTransactions);
  };

  const returnTiles = (transaction, index) => {
    return (
      <Tile
        key={index}
        deleteTransaction={deleteTransaction}
        index={index}
        transaction={transaction}
        updateTransaction={updateTransaction}
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

      {transactions.map(returnTiles)}
    </div>
  );
}

export default Home;

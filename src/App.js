import "./style.css";
import Tile from "./components/Tile";
import InputBox from "./components/InputBox";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([
    { amount: 200, category: "earning" },
  ]); // [{...},{...}]
  const [amount, setAmount] = useState(""); // eg. 300
  const [category, setCategory] = useState(""); // expense or saving

  const updateTransaction = (id) => {
    console.log(id);

    const updatedAmount = prompt(
      "Please enter the amount you want to update ?"
    );

    console.log(updatedAmount);
  };

  const deleteTransaction = (id) => {
    console.log(id);
    console.log(transactions);
    const newTransactions = transactions.filter((item, id) => {
      if (props.index === id) {
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

export default App;

// const UserCard = (props) => {
//   return (
//     <div className='usercard' >
//       <h1>Name: {props.name} </h1>
//       <h1>Phone: {props.phone}</h1>
//       <h1>Age : {props.age}</h1>
//     </div>
//   );
// }

// const Header = ()=>{
//   return (
//     <h1>Hello world</h1>
//   )
// }

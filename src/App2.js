import "./App.css";
import Tile from "./components2/Tile";
import InputBox from "./components2/InputBox";
import Counter from "./components2/Counter";
import { useState } from "react";

const num = [100, 200, 300];

function App() {
  const [transactions, setTransactions] = useState([
    { amount: 100, category: "expense" },
  ]);
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

export default App;

// const Header = (props) => {
//   return (
//     <div className='usercard' >
//       <h1>Hello {props.name}</h1>
//       <h1>Phone {props.phone}</h1>
//       <img src = {props.image}  />
//     </div>
//   );
// };

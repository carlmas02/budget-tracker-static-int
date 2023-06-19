import "./style.css";
import Tile from "./components/Tile";
import InputBox from "./components/InputBox";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([
    { amount: 100, category: "earning" },
  ]); // [{...},{...}]
  const [amount, setAmount] = useState(""); // eg. 300
  const [category, setCategory] = useState(""); // expense or saving

  const returnTiles = (transaction) => {
    return <Tile transaction={transaction} />;
  };

  return (
    <div className="App">
      <InputBox
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
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

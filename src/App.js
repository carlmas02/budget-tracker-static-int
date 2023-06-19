import "./style.css";
import Tile from "./components/Tile";
import InputBox from "./components/InputBox";
import Counter from "./components/Counter";
import { useState } from "react";

const num = [100, 200, 400, 300];

function App() {
  const [transactions, setTransactions] = useState([]); // [{...},{...}]
  const [amount, setAmount] = useState(""); // eg. 300
  const [category, setCategory] = useState(""); // expense or saving

  const returnTiles = (num) => {
    return (
      <Tile
        number={num}
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
      />

      {num.map(returnTiles)}
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

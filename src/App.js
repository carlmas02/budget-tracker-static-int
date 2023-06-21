import "./style.css";
import Tile from "./components/Tile";
import InputBox from "./components/InputBox";
import Counter from "./components/Counter";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Chart from "./components/Chart";
import Assistant from "./components/Assistant";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/chart"}>
            <li>Chart</li>
          </Link>
          <Link to={"/assistant"}>
            <li>Assistant</li>
          </Link>
        </ul>
      </nav>

      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/chart" element={<Chart />}></Route>
        <Route path="/assistant" element={<Assistant />}></Route>
      </Routes>
    </BrowserRouter>
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

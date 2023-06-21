import "./App.css";
import Home from "./components2/Home";
import Chart from "./components2/Chart";
import Assistant from "./components2/Assistant";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/chart">
            <li>Chart</li>
          </Link>
          <Link to="/assistant">
            <li>Assistant</li>
          </Link>
        </ul>
      </nav>

      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/chart" index element={<Chart />}></Route>
        <Route path="/assistant" index element={<Assistant />}></Route>
      </Routes>
    </BrowserRouter>
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

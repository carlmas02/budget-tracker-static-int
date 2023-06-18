import "./App.css";
import Tile from "./components2/Tile";
import InputBox from "./components2/InputBox";

const amount = [100, 200, 300];

function App() {
  const renderTile = (amt) => {
    return <Tile number={amt} />
  };

  return (
    <div className="App">
      <InputBox />

      {amount.map(renderTile)}
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

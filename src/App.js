import './style.css';
import Tile from './components/Tile';
import InputBox from './components/InputBox';


const num = [100,200,400,300];

const returnTiles = (num) =>{
  return <Tile number = {num} />
}

function App() {
  return (
    <div className="App">
      <InputBox />
      
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
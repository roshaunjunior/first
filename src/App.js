import './App.css';
import {useState} from 'react' ;
//import {User} from './User'
function App() {
  
  const [count ,setCount] = useState(0) ;
  const increament = () => {
    setCount(count + 1)
  }

  const decreament = () => {
    setCount(count - 1 )
  }

  // const setZero = () => {
  //   setCount(0 )
  // }
  return (
    <div className="App"> 
    <button onClick={increament}> Increament </button>
    <button onClick={decreament}> Decreament </button>
    <button onClick={()=>setCount(0)}> Set to Zero </button>
      {count}
    </div>
  );
}




export default App;

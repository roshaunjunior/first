import './App.css';
import {useState} from 'react' ;
//import {User} from './User'
function App() {
  

  const [age , setAge] = useState(0) ;
  const increaseAge = () => {
     setAge((element) => element + 1)
     console.log(age);
  }

  const decreaseAge = () => {
    setAge((element) => element - 1)
  }

  return (
    <div className="App"> 
     {age} 
     <button onClick = {increaseAge}>Increase Age </button>
     <button onClick={decreaseAge}> Decrease Age </button>
    </div>
  );
}




export default App;

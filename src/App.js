import './App.css';
import {useState} from 'react' ;
//import {User} from './User'
function App() {
  
  const [inputValue , setInputValue] = useState("") ;
  const handleInput = (event) => {
      setInputValue(event.target.value) ;
  }  
  
  return (
    <div className="App"> 
     <input type="text" onChange={handleInput} />
     {inputValue} 
    </div>
  );
}




export default App;

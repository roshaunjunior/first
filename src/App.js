import './App.css';
import {useState} from 'react' ;
//import {User} from './User'
function App() {
  
  const [textColor ,setTextColor] = useState("green") ;
  // const showOrHide = () => {
  //   setText(!text)
  // }
  return (
    <div className="App"> 
     <button onClick={() => {
      setTextColor(textColor === "green" ? "red" : "green") 
     }}> Change Color  </button>
     <h1 style={{color : textColor}}>My Name is Talha </h1> 
    </div>
  );
}




export default App;

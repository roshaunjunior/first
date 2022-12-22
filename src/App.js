import './App.css';
import {useState} from 'react' ;
//import {User} from './User'
function App() {
  
  const [text ,setText] = useState(false) ;
  // const showOrHide = () => {
  //   setText(!text)
  // }
  return (
    <div className="App"> 
     <button onClick={()=> setText(!text)}> Show/Hide </button>
     {text && <h1>My Name is Talha </h1> }
    </div>
  );
}




export default App;

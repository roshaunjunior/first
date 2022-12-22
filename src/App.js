import './App.css';
//import {User} from './User'
function App() {
  
  const planets = [
    {name: "Earth" ,isGasPlanet : false } , 
     {name : "Mars" , isGasPlanet : false } ,
     {name : "Venus" , isGasPlanet : true} ,
     {name : "Jupiter" , isGasPlanet : false} ,
     {name : "Uranuss" , isGasPlanet : true}
] ;
  return (
    <div className="App"> 
     {planets.map(
      (planet , key) => planet.isGasPlanet && <h1>{planet.name}</h1> 
      

     )}
     <p>New Features </p>
    </div>
  );
}




export default App;

import './App.css';
import {User} from "./User";
import { planets } from './Planet';

function App() {
  const users = [
    {name: "Pedro", age: 21},
    {name: "Jake", age: 25},
    {name: "Jessica", age: 45}
  ];

  return (
    <div className="App">
        {users.map((user, key)=>{
          return <User name={user.name} age={user.age}/>;
        })}
        {planets.map((planet, key)=>{
          return (
            planet.isGasPlanet && <h1>{planet.name}</h1>
            )
        })}
    </div>
  );
}

export default App;

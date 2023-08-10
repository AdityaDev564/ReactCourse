import "./App.css";
import User from "./User";

function App() {
  
  const Job = (props) => {
    return(
      <div>
        <h2>Salary = {props.salary}</h2>
        <h2>{props.position}</h2>
        <h2>{props.company}</h2>
      </div>
      
    )
  }
  return (
    <div className="App">
      <User name="Aditya" age={21} email="aditya@dev.com"/>
      <Job salary={200000} position="Senior SDE" company="Google"/>
    </div>
  );

    

}

export default App;

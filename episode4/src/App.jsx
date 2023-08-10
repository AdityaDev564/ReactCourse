import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  // const [inputValue, setInputValue] = useState("");

  const handleIncreament = () => {
    setCount(count + 1);
  }

  const handleDecreament = () => {
    setCount(count - 1);
  }

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // }
  return (
    <div className="App">
        
        <div>{count}</div>
        <button onClick={handleIncreament}>Increament</button>
        <button onClick={handleDecreament}>Decreament</button>
        <button onClick={()=>{setCount(0)}}>Set to Zero</button>
        {/* <input type="text" onChange={handleInputChange} />
        <div>{inputValue}</div> */}
    </div>
  );
}

export default App;

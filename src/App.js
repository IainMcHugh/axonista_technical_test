import React, {useState} from 'react';
import './App.scss';
import Home from "./Components/Home/Home"
import Header from './Components/Header/Header';

function App() {
  const [unit, setUnit] = useState(true);

  const unitCallback = (e) => {
    console.log(e);
    setUnit(e);
  }
  return (
    <div className="App">
      <Header unit={unitCallback}/>
      <Home unit={unit}/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Calculator from "./calculator"
import "./App.css"

function App() {
  return (
    <div className="App">
     <h1 className="AppTitle">Calculate BMI in metric conventions</h1>
      < Calculator />
      {/* <img src={require('./bmi2.jpg')} className="ResultImg" /> */}
    </div>
  );
}

export default App;

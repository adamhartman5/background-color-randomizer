import React, { useState, useEffect } from 'react';
import "./App.css";

function App() {

  const [backgroundColor, setBackgroundColor] = useState("#000000")
  const [randomNum, setRandomNum] = useState(0)

  const backgroundColors = ["#4978c0", "#74cfe9", "#f55919", "#800000", "#008080"]

  const changeBackground = () => {
    getRandomNum();
    setBackgroundColor(backgroundColors[randomNum]);
  }

  const getRandomNum = () => {
    let getRandomNum = Math.floor((Math.random() * 5));
    setRandomNum(getRandomNum);
  }

  return (
    <div className="App">
      <div className="main" style={{backgroundColor: backgroundColor}}>
        <div className="bg-color">
          <p className="bg-text">Background Color: {backgroundColor}</p>
        </div>
        <button className="button"onClick={changeBackground}>
          Click me
        </button>
      </div>
    </div>
  );
}

export default App;

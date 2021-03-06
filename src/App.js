import React, { useState } from 'react';
import "./App.css";

function App() {

  const [backgroundColor, setBackgroundColor] = useState("#000000")

  const backgroundColors = ["#4978c0", "#74cfe9", "#f55919", "#800000", "#008080"]

  const changeBackground = () => {
    const randomNum = Math.floor((Math.random() * backgroundColors.length));
    setBackgroundColor(backgroundColors[randomNum]);
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

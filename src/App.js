import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  const [showParagraph, setIsShowParagraph] = useState(false);

  const toggleParagrahHandler = (event) => {
    event.preventDefault();
    setIsShowParagraph(!showParagraph);
  };

  return (
    <>
      <div className='app'>
        <h1>Hi there!</h1>
        {showParagraph && <p>This is new!</p>}
      </div>
      <div className='app'>
        <Button onClick={toggleParagrahHandler}>Change state!</Button>
      </div>
    </>
  );
}

export default App;

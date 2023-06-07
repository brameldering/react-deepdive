import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = (event) => {
    setShowParagraph((prevState) => !prevState);
  };

  return (
    <>
      <div className='app'>
        <h1>Hi there!</h1>
        {showParagraph && <p>This is new!</p>}
      </div>
      <div className='app'>
        <Button onClick={toggleParagraphHandler}>Change state!</Button>
      </div>
    </>
  );
}

export default App;

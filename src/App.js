import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";
import "./App.css";

function App() {
  console.log("App running");

  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleButtonHandler = () => {
    setAllowToggle((prevState) => !prevState);
  };

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleButtonHandler}>Allow toggling</Button>
      <Button onClick={toggleParagraphHandler}>Change state!</Button>
    </div>
  );
}

export default App;

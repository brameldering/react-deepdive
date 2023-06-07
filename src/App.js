import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";
import "./App.css";

function App() {
  console.log("App running");

  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = (event) => {
    setShowParagraph((prevState) => !prevState);
  };

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Change state!</Button>
    </div>
  );
}

export default App;

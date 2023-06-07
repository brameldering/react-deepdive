import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import DemoList from "./components/UI/Button/Demo/DemoList";
import "./App.css";

function App() {
  console.log("App running");

  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [7, 2, 4, 9, 5, 3], []);

  return (
    <div className='app'>
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change Title</Button>
    </div>
  );
}

export default App;

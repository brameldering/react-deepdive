import React from "react";

const DemoOutput = (props) => {
  console.log("DemoOutput");
  return <p>{props.show && "text"}</p>;
};

export default DemoOutput;

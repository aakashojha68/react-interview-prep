import React from "react";
import { useSelector } from "react-redux";

const Child = () => {
  const theme = useSelector((store) => store.counter.theme);
  console.log("Child renders");
  console.log(theme);
  return <div>Child</div>;
};

export default Child;

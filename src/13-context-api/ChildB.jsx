import React, { useContext } from "react";
import { DataContext } from "./Context";

const ChildB = () => {
  console.log("ChildB renders");
  const { data } = useContext(DataContext);
  return <div>ChildB - {data}</div>;
};

export default ChildB;

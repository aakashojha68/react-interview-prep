import React from "react";
import Redux from "./Redux";
import Child from "./Child";

const ReduxParent = () => {
  return (
    <div>
      <Redux />
      <Child />
    </div>
  );
};

export default ReduxParent;

import React from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import { Provider } from "./Context";

const Parent = () => {
  console.log("Parent renders");
  return (
    <div>
      <Provider>
        <ChildA />
        <ChildB />
      </Provider>
    </div>
  );
};

export default Parent;

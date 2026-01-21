import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, customPayload } from "./store/userSlice";

const Redux = () => {
  const value = useSelector((store) => store.counter.value);
  const dispatch = useDispatch();
  console.log("Redux comp renders");
  return (
    <>
      <p>Count: {value}</p>
      <button onClick={() => dispatch(increment())} className="px-2 mx-2">
        +
      </button>
      <button onClick={() => dispatch(decrement())} className="px-2 mx-2">
        -
      </button>
      <button onClick={() => dispatch(customPayload(20))} className="px-2 mx-2">
        -
      </button>
    </>
  );
};

export default Redux;

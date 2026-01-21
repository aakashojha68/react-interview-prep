import React, { useContext } from "react";
import { DataContext } from "./Context";

const ChildA = () => {
  const { theme, handleChangeTheme } = useContext(DataContext);
  console.log(theme);
  console.log("ChildA renders");

  return (
    <div>
      <p>ChildA - {theme ? 1 : 0}</p>

      <button onClick={handleChangeTheme}>
        {theme ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default ChildA;

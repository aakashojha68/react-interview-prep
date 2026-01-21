import { createContext, useState } from "react";

export const DataContext = createContext({});

export const Provider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const [data, setData] = useState("This is data");
  const handleChangeTheme = () => {
    setTheme(!theme);
  };
  return (
    <DataContext.Provider value={{ theme, handleChangeTheme, data }}>
      {children}
    </DataContext.Provider>
  );
};

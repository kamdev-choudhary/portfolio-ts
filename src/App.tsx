import React from "react";
import Layout from "./layout/Layout";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./constants/theme"; // Adjust path as necessary
import { useGlobalContext } from "./GlobalProvider";

const App: React.FC = () => {
  const { theme } = useGlobalContext();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Layout />
    </ThemeProvider>
  );
};

export default App;

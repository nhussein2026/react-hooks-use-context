import React, { createContext, useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user";

export const themeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <main className={theme}>
      <themeContext.Provider value={{ theme, setTheme }}>
        <UserProvider>
          <Header  />
          <Profile />ٍ
        </UserProvider>
      </themeContext.Provider>
    </main>
  );
}

export default App;

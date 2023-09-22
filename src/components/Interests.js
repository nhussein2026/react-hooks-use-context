import React, { useCallback, useContext } from "react";
import { themeContext } from "./App";
import { UserContext } from "../context/user";

function Interests() {
  const { theme } = useContext(themeContext);
  const {user} = useContext(UserContext);
  console.log("this is the user ", user)
  return (
    <div>
      <h4>Interests</h4>
      <ul className={theme}>
        {user.interests.map((interest) => (
           <li key={interest}>{interest}</li> 
          ))}  
      </ul>
    </div>
  );
}

export default Interests;

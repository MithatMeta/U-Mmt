
import Header from "./Header";
import Button from "./Button";

import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Profile from "./Profile";

function Container() {
    const { theme }= useContext(ThemeContext) ;
  return (
    <div className={`App ${theme}`}>
        <Header />
        <hr />
        <Button />
        <br /><hr />
        <Profile />
    </div>
  )
}

export default Container;
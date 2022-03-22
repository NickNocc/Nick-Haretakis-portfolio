import React, { useContext } from "react";
import "./toggle.css";
import Sun from "../../assets/img/sun.png";
import Moon from "../../assets/img/moon.png";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="toggle">
      <img src={Sun} alt="" className="toggle-icon" />
      <img src={Moon} alt="" className="toggle-icon" />
      <button
        className="toggle-button"
        onClick={handleClick}
        style={{ left: theme.state.darkmode ? 0 : 25 }}
      ></button>
    </div>
  );
};

export default Toggle;

import React from "react";
import "./Button.css";

const Button = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick} name="button" type="submit">
      {children}
    </button>
  );
};

export default Button;

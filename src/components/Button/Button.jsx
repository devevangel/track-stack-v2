import React from "react";

import "./Button.css";

const Button = ({ text }) => {
  const handleClick = () => {
    alert("Will add yoiu to Waitlist soon.");
  };

  return (
    <button onClick={handleClick} className="custom-button">
      <div className="button-text">{text}</div>
    </button>
  );
};

export default Button;

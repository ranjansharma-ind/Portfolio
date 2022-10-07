import React from "react";
import "./Portfolio.css";

function ToggleSwitch(props) {
  return (
    <>
      <div className="toggleThemeicon">
        <button onClick={props.click}>
          <p>{props.name}</p>
        </button>
      </div>
    </>
  );
}

export default ToggleSwitch;

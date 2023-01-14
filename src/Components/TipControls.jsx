// TipControls Component
// By: Tyler Dinn

import React from "react";
import "./TipControls.css";
import "./CommonClasses.css";

// TipControls takes in the "handleTipChange" function,
// the "calculateTotal" function and the "tipPercent" state
const TipControls = ({ handleTipChange, calculateTotal, tipPercent }) => {
  return (
    <div className="container">
      <div className="title">Tip</div>
      <div className="inputContainer">
        <span>%</span>
        {/* Tip Input */}
        {/* Sets the tipPercent as the value  */}
        {/* Runs the handleTipChange function when there is an onChange event */}
        {/* Calculates the Total when there is an onKeyUp event */}
        <input
          type="text"
          id="tipInput"
          placeholder="10"
          value={tipPercent}
          onChange={handleTipChange}
          onKeyUp={calculateTotal}
        />
      </div>
    </div>
  );
};

export default TipControls;

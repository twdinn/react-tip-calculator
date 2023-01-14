// Input field component
// By: Tyler Dinn

import React from "react";
import "./InputField.css";
import "./CommonClasses.css";

// InputField takes in the bill "value",
//the "handleBillChange" function, and the "calculateTotal" function
const InputField = ({ value, handleBillChange, calculateTotal }) => {
  return (
    <div className="container" id="topContainer">
      {/* Title for input field */}
      <div className="title">Bill Total</div>
      <div className="inputContainer">
        <span>$</span>
        {/* Input field for bill total */}
        {/* Set value to the bill input value  */}
        {/* Run handleBillFunction when theres a onChange event  */}
        {/* Calculate total when theres a onKeyUp event */}
        <input
          type="text"
          id="billTotalInput"
          placeholder="0.00"
          value={value}
          onChange={handleBillChange}
          onKeyUp={calculateTotal}
        />
      </div>
    </div>
  );
};

export default InputField;

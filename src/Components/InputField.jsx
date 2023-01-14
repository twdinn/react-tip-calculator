// Input field component
// By: Tyler Dinn

// InputField takes in the bill "value",
//the "handleBillChange" function, and the "calculateTotal" function
const InputField = ({ value, handleBillChange, calculateTotal }) => {
  return (
    /* Container for input field */
    <div className="container" id="topContainer">
      /* Title for input field */
      <div className="title">Bill Total</div>
      /* Container for input field and dollar sign */
      <div className="inputContainer">
        /* Dollar sign */
        <span>$</span>
        /* Input field for bill total */
        <input
          /* Set input type to text */
          type="text"
          id="billTotalInput"
          placeholder="0.00"
          /* Set value to the bill input value  */
          value={value}
          /* Handle change event */
          onChange={handleBillChange}
          /* Calculate total on key up */
          onKeyUp={calculateTotal}
        />
      </div>
    </div>
  );
};

export default InputField;

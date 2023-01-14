// Tip Calculator
// By: Tyler Dinn

import React, { useState, useEffect } from "react";
import "./TipCalculator.css";
import InputField from "./Components/InputField";
import TipControls from "./Components/TipControls";
import PeopleControls from "./Components/PeopleControls";
import TotalPerPerson from "./Components/TotalPerPerson";

const TipCalculator = () => {
  // state for bill value
  const [bill, setBill] = useState();

  // state for tip percentage
  const [tipPercent, setTipPercent] = useState();

  // state for number of people
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  // state for total per person
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  // callback function to handle change of bill input field
  const handleBillChange = (event) => {
    setBill(event.target.value);
  };

  // callback function to handle change of tip percentage input field
  const handleTipChange = (event) => {
    setTipPercent(event.target.value);
  };

  // callback function to increase number of people
  const increasePeople = () => {
    setNumberOfPeople(numberOfPeople + 1);
  };

  // callback function to decrease number of people

  const decreasePeople = () => {
    if (numberOfPeople > 1) {
      setNumberOfPeople(numberOfPeople - 1);
    }
  };

  // callback function to calculate and update the total per person
  const calculateTotal = () => {
    const tipAmt = bill * (tipPercent / 100);
    const total = parseFloat(bill) + tipAmt;
    const totalPerPerson = total / numberOfPeople;
    setTotalPerPerson(totalPerPerson);
  };

  // useEffect to call the calculateTotal function when the bill or tipPercent state changes
  useEffect(() => {
    calculateTotal();
  }, [bill, tipPercent]);

  return (
    <div className="wrapper">
      {/* render InputField component and pass state and callback functions as props */}
      <InputField
        value={bill}
        handleBillChange={handleBillChange}
        calculateTotal={calculateTotal}
      />
      {/* render TipControls component and pass state and callback functions as props */}
      <TipControls
        handleTipChange={handleTipChange}
        calculateTotal={calculateTotal}
        tipPercent={tipPercent}
      />
      {/* render PeopleControls component and pass state and callback functions as props */}
      <PeopleControls
        increasePeople={increasePeople}
        decreasePeople={decreasePeople}
        numberOfPeople={numberOfPeople}
      />
      {/* render TotalPerPerson component and pass state as props */}
      <TotalPerPerson totalPerPerson={totalPerPerson} />
    </div>
  );
};

export default TipCalculator;

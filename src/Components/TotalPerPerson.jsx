// TotalPerPerson Component
// By: Tyler Dinn

import React from "react";
import "./TotalPerPerson.css";
import "./CommonClasses.css";

// TotalPerPerson takes in the "totalPerPerson" state
const TotalPerPerson = ({ totalPerPerson }) => {
  return (
    <div className="totalContainer">
      <div className="title">Total per Person</div>
      <div className="total" id="perPersonTotal">
        {/* If totalPerPerson = NaN return 0 */}
        {/* toFixed(2) displays the total with 2 decimal places */}$
        {isNaN(totalPerPerson) ? 0 : totalPerPerson.toFixed(2)}
      </div>
    </div>
  );
};

export default TotalPerPerson;

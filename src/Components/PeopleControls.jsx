// PeopleControls Component
// By: Tyler Dinn

import React from "react";
import "./PeopleControls.css";
import "./CommonClasses.css";

// PeopleControls takes in the "increasePeople" function,
// the "decreasePeople" function, and the "numberOfPeople" state
const PeopleControls = ({ increasePeople, decreasePeople, numberOfPeople }) => {
  return (
    <div className="container" id="bottom">
      <div>
        <div className="title">People</div>
        <div className="controls">
          {/* increase button */}
          <span className="buttonContainer">
            <button className="splitButton" onClick={increasePeople}>
              <span className="buttonText">+</span>
            </button>
          </span>
          {/* number of people */}
          <span className="splitAmount" id="numberOfPeople">
            {numberOfPeople}
          </span>
          {/* decrease button */}
          <span className="buttonContainer">
            <button className="splitButton" onClick={decreasePeople}>
              <span className="buttonText">-</span>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PeopleControls;

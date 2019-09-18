import React from "react";

function Header(props) {
  return (
    <div className="header">
      <button onClick={() => props.selectDay("sunday")}>Sunday</button>
      <button onClick={() => props.selectDay("monday")}>Monday</button>
      <button onClick={() => props.selectDay("tuesday")}>Tuesday</button>
      <button onClick={() => props.selectDay("wednesday")}>Wednesday</button>
      <button onClick={() => props.selectDay("thursday")}>Thursday</button>
      <button onClick={() => props.selectDay("friday")}>Friday</button>
      <button onClick={() => props.selectDay("saturday")}>Saturday</button>
    </div>
  );
}

export default Header;

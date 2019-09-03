import React from "react";

function Controls(props) {
  return (
    <div>
      <button onClick={props.add}>Add</button>
      <button onClick={props.delete}>Delete</button>
      <button onClick={props.edit}>Edit</button>
    </div>
  );
}

export default Controls;

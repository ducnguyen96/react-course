import React from "react";

const userInput = (props) => {
  return (
    <input
      placeholder="type something"
      onChange={props.changed}
      value={props.username}
    />
  );
};

export default userInput;

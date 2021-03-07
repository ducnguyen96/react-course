import React from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
  const style = {
    border: `1px solid #eee`,
  };
  return (
    <div className="UserOutput">
      <p style={style}>{props.username}</p>
      <p>{props.username}</p>
    </div>
  );
};

export default UserOutput;

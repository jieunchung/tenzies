import React from "react";

const Timer = (props) => {
  return (
    <div className="timer">
      <span>{props.timer}</span>s
    </div>
  );
};

export default Timer;

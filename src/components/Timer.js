import React from "react";

const Timer = (props) => {
  return (
    <div className="timer">
      {props.timer}<span>s</span>
    </div>
  );
};

export default Timer;

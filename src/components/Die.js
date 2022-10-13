import React from "react";

const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#ffffff",
  };
  return (
    <div className="die" style={styles} onClick={props.holdDice}>
      {props.value}
    </div>
  );
};

export default Die;

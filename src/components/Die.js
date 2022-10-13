import React from "react";

const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#ffffff",
  };
  return (
    <div className="die" style={styles}>
      {props.value}
    </div>
  );
};

export default Die;

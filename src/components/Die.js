import React from "react";
import {
  GiInvertedDice1,
  GiInvertedDice2,
  GiInvertedDice3,
  GiInvertedDice4,
  GiInvertedDice5,
  GiInvertedDice6,
} from "react-icons/gi";

const Die = (props) => {
  console.log(props.tenzies);
  const styles = {
    color:
      props.isHeld && props.tenzies
        ? "#4cbf7a"
        : props.isHeld
        ? "#FA2C33"
        : "#0c2334",
  };
  return (
    <div className="die" style={styles} onClick={props.holdDice}>
      {props.value === 1 ? (
        <GiInvertedDice1 />
      ) : props.value === 2 ? (
        <GiInvertedDice2 />
      ) : props.value === 3 ? (
        <GiInvertedDice3 />
      ) : props.value === 4 ? (
        <GiInvertedDice4 />
      ) : props.value === 5 ? (
        <GiInvertedDice5 />
      ) : (
        props.value === 6 && <GiInvertedDice6 />
      )}
    </div>
  );
};

export default Die;

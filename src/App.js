import React, { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

/**
 * update the array of numbers in state to be
 * an array of objects instead.
 * include value:<randomnumber>, isHeld.false
 */

const App = () => {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid(),
      });
    }
    return diceArray;
  }

  const rollDice = () => {
    setDice(allNewDice());
  };
  const diceElements = dice.map((die) => (
    <Die key={die.id} value={die.value} />
  ));

  return (
    <main>
      <div className="game">
        <div className="die-grid">{diceElements}</div>
        <button className="roll-button" onClick={rollDice}>
          Roll
        </button>
      </div>
    </main>
  );
};

export default App;

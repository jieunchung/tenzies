import React, { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

/**
 * change the background color for when the dice is being held.
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
    <Die key={die.id} value={die.value} isHeld={die.isHeld} />
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

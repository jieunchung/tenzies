import React, { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

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

  /**
   * only roll dice that are not being held
   */

  const rollDice = () => {
    setDice((oldDice) =>
      oldDice.map((oldDie) => {
        return oldDie.isHeld
          ? { ...oldDie }
          : {
              ...oldDie,
              value: Math.floor(Math.random() * 6) + 1,
              id: nanoid(),
            };
      })
    );
  };

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => {
        holdDice(die.id);
      }}
    />
  ));

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((oldDie) => {
        return oldDie.id === id
          ? { ...oldDie, isHeld: !oldDie.isHeld }
          : oldDie;
      })
    );
  }

  return (
    <main>
      <div className="game">
        <h1 className="title">Tenzies</h1>
        <p className="description">
          Roll untill all dice are the same. <br /> Click each die to hold it at
          its current value between rolls.
        </p>
        <div className="die-grid">{diceElements}</div>
        <button className="roll-button" onClick={rollDice}>
          Roll
        </button>
      </div>
    </main>
  );
};

export default App;

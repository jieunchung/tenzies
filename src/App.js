import React, { useState } from "react";
import Die from "./components/Die";

const App = () => {
  const [dice, setDice] = useState(allNewDice());

  /**
   * changed const to function.
   * javascript moves the function to the top when using function
   * so you can access it before initialization.
   */
  function allNewDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(Math.floor(Math.random() * 6) + 1);
    }
    return diceArray;
  }

  const diceElements = dice.map((die) => <Die value={die} />);

  return (
    <main>
      <div className="game">
        <div className="die-grid">{diceElements}</div>
      </div>
    </main>
  );
};

export default App;

import React from "react";
import Die from "./components/Die";

/**
 *
 * Write a function that returns an array
 * of 10 random numbers between 1-6 inclusive.
 *
 * Log the array of numbers to the console for now
 */

const App = () => {
  const allNewDice = () => {
    const numberArray = [];
    for (let i = 0; i < 10; i++) {
      numberArray.push(Math.floor(Math.random() * 6) + 1);
    }
    return numberArray;
  };
  console.log(allNewDice());

  return (
    <main>
      <div className="game">
        <div className="die-grid">
          <Die value="1" />
          <Die value="2" />
          <Die value="3" />
          <Die value="4" />
          <Die value="5" />
          <Die value="6" />
          <Die value="1" />
          <Die value="8" />
          <Die value="9" />
          <Die value="1" />
        </div>
      </div>
    </main>
  );
};

export default App;

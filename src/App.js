import React, { useState, useEffect } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Timer from "./components/Timer";
import { BsFillTrophyFill } from "react-icons/bs";

const App = () => {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);
  const [record, setRecord] = useState(() => {
    const score = localStorage.getItem("score");
    return `${score}s` || "";
  });
  const { width, height } = useWindowSize();

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
    tenzies
      ? setDice(allNewDice())
      : setDice((oldDice) =>
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
    tenzies ? setCounter(0) : setCounter(counter + 1);
    tenzies && setTimer(0);
    setRecord(() => {
      const score = localStorage.getItem("score");
      return `${score}s`;
    });
  };

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((oldDie) => {
        return oldDie.id === id
          ? { ...oldDie, isHeld: !oldDie.isHeld }
          : oldDie;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => {
        holdDice(die.id);
      }}
      tenzies={tenzies}
    />
  ));

  useEffect(() => {
    const isHeld = dice.every((die) => die.isHeld);
    const firstDie = dice[0].value;
    const allSameValues = dice.every((die) => die.value === firstDie);

    if (isHeld && allSameValues) {
      setTenzies(true);
    } else {
      setTenzies(false);
    }
  }, [dice]);

  useEffect(() => {
    const oldHighScore = localStorage.getItem("score");

    !tenzies
      ? setTimeout(() => setTimer(timer + 1), 1000)
      : setTimer(timer + 0);

    if (oldHighScore === null) {
      setRecord(`${timer}s`);
    }
  });

  useEffect(() => {
    const oldHighScore = localStorage.getItem("score");

    if (tenzies) {
      if (oldHighScore == null || oldHighScore > timer) {
        localStorage.setItem("score", timer);
        setRecord("new record!");
      }
    }
  }, [tenzies]);

  return (
    <main>
      {tenzies && <Confetti width={width} height={height} />}
      <div className="game">
        <div className="data">
          <Timer timer={timer} />
          <div className="best">
            <BsFillTrophyFill className="best-icon" />
            {record}
          </div>
          <div className="counter">{counter} rolls</div>
        </div>
        <h1 className="title">Tenzies</h1>
        <p className="description">
          Roll untill all dice are the same. <br /> Click each die to hold it at
          its current value between rolls.
        </p>
        <div className="die-grid">{diceElements}</div>
        <button className="roll-button" onClick={rollDice}>
          {tenzies ? "New Game" : "Roll"}
        </button>
      </div>
    </main>
  );
};

export default App;

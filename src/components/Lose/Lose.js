import React from "react";
import { sample } from "new-component/src/utils";
import { WORDS } from "../../data";

function Lose({answer, setAnswer, setProgress, setPrevGuess}) {
  const nextAnswer = sample(WORDS);
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button className="reset" onClick={() => {
        setAnswer(nextAnswer);
        const nextProgress = '';
        setProgress(nextProgress);
        const nextPrevGuess = [];
        setPrevGuess(nextPrevGuess);
      }}>Play Again</button>
    </div>
  );
}

export default Lose;

import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";

function Win({prevGuess, setAnswer, setProgress, setPrevGuess}) {
  const nextAnswer = sample(WORDS);
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in {" "}
        <strong>{prevGuess.length}</strong>{" "}{prevGuess.length <= 1 ? "try" : "tries"}.
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

export default Win;

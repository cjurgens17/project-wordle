import React from "react";
import { sample } from "../../utils";
import { QWERTY, WORDS } from "../../data";
import buildKeyboard from "../../build-keyboard";

function Win({prevGuess, setAnswer, setProgress, setPrevGuess, setQwerty}) {
  const nextAnswer = sample(WORDS);
  const nextQwerty = buildKeyboard(QWERTY);
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in {" "}
        <strong>{prevGuess.length}</strong>{" "}{prevGuess.length <= 1 ? "try" : "tries"}.
      </p>
      <button className="reset" onClick={() => {
        setAnswer(nextAnswer);
        setQwerty(nextQwerty);
        const nextProgress = '';
        setProgress(nextProgress);
        const nextPrevGuess = [];
        setPrevGuess(nextPrevGuess);
      }}>Play Again</button>
    </div>
  );
}

export default Win;

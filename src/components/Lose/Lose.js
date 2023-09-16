import React from "react";
import { sample } from "new-component/src/utils";
import { QWERTY, WORDS } from "../../data";
import buildKeyboard from "../../build-keyboard";

function Lose({answer, setAnswer, setProgress, setPrevGuess, setQwerty}) {
  const nextAnswer = sample(WORDS);
  const nextQwerty = buildKeyboard(QWERTY);
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
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

export default Lose;

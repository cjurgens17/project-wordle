import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess/Guess";
import PreviousGuesses from "../PreviousGuesses";
import Lose from "../Lose/Lose";
import Win from "../Win/Win";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import buildKeyboard from "../../build-keyboard";
import { QWERTY } from "../../data";
import Keyboard from "../Keyboard/Keyboard";



function Game() {
  const [ prevGuess, setPrevGuess ] = React.useState([]);
  const [ progress, setProgress ] = React.useState("");
  const [ answer, setAnswer ] = React.useState(() => {
    return sample(WORDS);
  });
  const [ qwerty, setQwerty ] = React.useState(() => {
    return buildKeyboard(QWERTY);
  });
  const ALLOWED_GUESSES = NUM_OF_GUESSES_ALLOWED;
  console.info({ answer });

  return (
    <>
      <PreviousGuesses
        prevGuess={prevGuess.length > 0 && prevGuess}
        answer={answer}
        qwerty={qwerty}
        setQwerty={setQwerty}
      ></PreviousGuesses>
      {progress === answer ? (
        <Win prevGuess={prevGuess} setAnswer={setAnswer} setProgress={setProgress} setPrevGuess={setPrevGuess}></Win>
      ) : prevGuess.length >= ALLOWED_GUESSES ? (
        <Lose answer={answer} setAnswer={setAnswer} setProgress={setProgress} setPrevGuess={setPrevGuess}></Lose>
      ) : (
        <Guess
          prevGuess={prevGuess}
          setPrevGuess={setPrevGuess}
          progress={progress}
          setProgress={setProgress}
        />
      )}
      <Keyboard qwerty={qwerty}/>
    </>
  );
}

export default Game;

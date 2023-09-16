import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import GuessCell from "../GuessCell";

function PreviousGuesses({ prevGuess, answer}) {
  return (
    <div className="guess-results">
      {range(0,NUM_OF_GUESSES_ALLOWED).map((num) => {
          const guessItem = prevGuess.length > num ? prevGuess[num].input : undefined;
        return (
          <p key={num} className="guess">
            <GuessCell
              key={num}
              guessItem={guessItem}
              answer={answer}
            ></GuessCell>
          </p>
        );
      })}
    </div>
  );
}

export default PreviousGuesses;

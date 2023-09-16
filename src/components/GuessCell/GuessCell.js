import React from 'react';
import { range } from '../../utils';
import checkGuess from '../../game-helpers'

function GuessCell({guessItem = '', answer, qwerty, setQwerty}) {
  //guessArr[num] == char
  const guessArr = guessItem.split('');
  const guessStatus = checkGuess(guessItem,answer);
  let status;
  let value;
  return (
    <>
    {range(0,5).map((num) => {
      status = guessStatus !== null ? `cell ${guessStatus[num].status}` : 'cell';
      value = guessArr[num] ?? undefined;
      //check if quessArr[num] is undefined before updating
      if(value !== undefined) qwerty[guessArr[num]] = status;
      const nextQwerty = {...qwerty};
      setQwerty(nextQwerty);
      return <span key={num} className={status}>{value}</span>
    })}
    </>
  );
}

export default GuessCell;

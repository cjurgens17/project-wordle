import React from 'react';
import { range } from '../../utils';
import checkGuess from '../../game-helpers'

function GuessCell({guessItem = '', answer}) {
  const guessArr = guessItem.split('');
  const guessStatus = checkGuess(guessItem,answer);
  let status;
  return (
    <>
    {range(0,5).map((num) => {
      status = guessStatus !== null ? `cell ${guessStatus[num].status}` : 'cell';
      return <span key={num} className={status}>{guessArr[num] ?? undefined}</span>
    })}
    </>
  );
}

export default GuessCell;

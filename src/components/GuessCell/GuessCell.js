import React from 'react';
import { range } from '../../utils';
import checkGuess from '../../game-helpers'

function GuessCell({guessItem = '', answer}) {
  const guessArr = guessItem.split('');
  const guessStatus = checkGuess(guessItem,answer);
  let status;
  let value;
  return (
    <>
    {range(0,5).map((num) => {
      status = guessStatus !== null ? `cell ${guessStatus[num].status}` : 'cell';
      value = guessArr[num] ?? undefined;
      return <span key={num} className={status}>{value}</span>
    })}
    </>
  );
}

export default GuessCell;

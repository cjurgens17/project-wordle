import React from 'react';
import { range } from '../../utils';

function Keyboard({qwerty}) {
  const keyboardRows = 3;
  const keyboardCells = [10,9,7];
  const qwertyEntries = Object.entries(qwerty);
  let counter = 0;
   
  return <div className='keyboard'>
    {range(0,keyboardRows).map((row) => {
       return <div className='keyboard-row' key={row}>{
        range(0, keyboardCells[row]).map((cell) => {
          return <span key={cell} className={`${qwertyEntries[counter][1]} keyboard-cell`}>{qwertyEntries[counter++][0]}</span>
        })
       }</div>
    })}
  </div>;
}

export default Keyboard;

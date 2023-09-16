export default function checkGuessKeyboard(guess, answer, qwerty) {
    // This constant is a placeholder that indicates we've successfully
    // dealt with this character (it's correct, or misplaced).
    const SOLVED_CHAR = '✓';
  
    if (!guess) {
      return null;
    }
  
    const guessChars = guess.toUpperCase().split('');
    const answerChars = answer.split('');
  
    const newQwerty = {...qwerty};
  
    // Step 1: Look for correct letters.
    for (let i = 0; i < guessChars.length; i++) {
      if (guessChars[i] === answerChars[i]) {
        newQwerty[guessChars[i]] = 'cell keyboard-cell correct';
        answerChars[i] = SOLVED_CHAR;
        guessChars[i] = SOLVED_CHAR;
      }
    }
  
    // Step 2: look for misplaced letters. If it's not misplaced,
    // it must be incorrect.
    for (let i = 0; i < guessChars.length; i++) {
      if (guessChars[i] === SOLVED_CHAR) {
        continue;
      }
  
      let status = 'cell keyboard-cell incorrect';
      const misplacedIndex = answerChars.findIndex(
        (char) => char === guessChars[i]
      );
      if (misplacedIndex >= 0) {
        status = 'cell keyboard-cell misplaced';
        answerChars[misplacedIndex] = SOLVED_CHAR;
      }
      
      newQwerty[guessChars[i]] = status;
    }
    return newQwerty;
  }
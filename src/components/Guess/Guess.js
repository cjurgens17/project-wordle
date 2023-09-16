import React from 'react';
import checkGuessKeyboard from '../../game-helpers-keyboard';

function Guess({prevGuess, setPrevGuess, setProgress, answer,qwerty, setQwerty }) {
        const [ guess, setGuess ] = React.useState({
            id: Math.random(),
            input:''
        });
    return (
        <form className='guess-input-wrapper'
        onSubmit={(event) => {
            //preventing a redirect/refresh
            event.preventDefault();
            
            //double checking validation
            if(guess.input.length < 5){
                window.alert('Guess has to be 5 characters');
                return;
            }

            if(prevGuess.length >= 6){
                window.alert('You have reached the max amount of guesses! Hahahahaha Better Luck Next Time');
                return;
            }

            //updating qwerty to match styles
            const nextQwerty = checkGuessKeyboard(guess.input,answer,qwerty);
            setQwerty(nextQwerty);

            //checking for the status of game: continue, win,lose
            const nextProgress = guess.input;
            setProgress(nextProgress);

            //setting prevGuess state
            const nextPrevGuess = [...prevGuess, guess];
            setPrevGuess(nextPrevGuess);
            const nextGuess = {
                id: Math.random(),
                input: ''
            }
            setGuess(nextGuess);
           
        }}
        >
            <label htmlFor="guess">Enter Guess:</label>
            <input
            required
            minLength={5}
            maxLength={5}
            pattern="[a-zA-Z]{5}"
            id="guess"
            type="text"
            value={guess.input}
            title="Guess Needs to be 5 characters"
            onChange={(event) => {
                setGuess({...guess,input: event.target.value.toUpperCase()})
            }}
            />
        </form>
    );
}


export default Guess;
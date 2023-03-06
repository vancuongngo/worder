import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guesses from '../Guesses/Guesses';
import HappyBanner from '../HappyBanner/HappyBanner';
import SadBanner from '../SadBanner/SadBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const addGuess = (guess) => setGuesses([...guesses, guess]);
  const [gameStatus, setGameStatus] = React.useState('');
  const [numberOfGuess, setNumberOfGuess] = React.useState(0);
  const handleGameStatus = (status, numberOfGuess) => {
    setGameStatus(status);
    setNumberOfGuess(numberOfGuess);
  };
  return (
    <>
      <Guesses
        guesses={guesses}
        answer={answer}
        handleGameStatus={handleGameStatus}
      />
      <GuessInput addGuess={addGuess} />
      {gameStatus === 'won' && <HappyBanner numberOfGuess={numberOfGuess} />}
      {gameStatus === 'lost' && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;

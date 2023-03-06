import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Guesses({ guesses, answer, handleGameStatus }) {
  return (
    <>
      <div className='guess-results'>
        {range(NUM_OF_GUESSES_ALLOWED).map((row) => (
          <p className='guess' key={row}>
            {range(5).map((column) => {
              const key = `${row}-${column}`;
              if (guesses[row]) {
                if (row < NUM_OF_GUESSES_ALLOWED && guesses[row] === answer) {
                  handleGameStatus('won', row + 1);
                } else if (row === NUM_OF_GUESSES_ALLOWED - 1) {
                  handleGameStatus('lost', row + 1);
                }
                const results = checkGuess(guesses[row], answer);
                const characters = guesses[row].split('');
                if (characters[column] !== '') {
                  return (
                    <span
                      className={`cell ${results[column]?.status}`}
                      key={key}
                    >
                      {characters[column]}
                    </span>
                  );
                } else {
                  return <span className='cell' key={key}></span>;
                }
              } else {
                return <span className='cell' key={key}></span>;
              }
            })}
          </p>
        ))}
      </div>
    </>
  );
}

export default Guesses;

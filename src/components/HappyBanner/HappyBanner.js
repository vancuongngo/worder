import React from 'react';

function HappyBanner({ numberOfGuess }) {
  return (
    <div className='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numberOfGuess} guesses</strong>.
      </p>
    </div>
  );
}

export default HappyBanner;

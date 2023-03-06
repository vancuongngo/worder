import React from 'react';

function GuessInput({ addGuess }) {
  const [word, setWord] = React.useState('');
  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(e) => {
        e.preventDefault();
        addGuess(word);
        setWord('');
      }}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        required
        pattern='[A-Za-z]{1,5}'
        maxLength='5'
        value={word}
        onChange={(event) => setWord(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;

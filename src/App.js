import './App.scss';
import React, { useState, react } from 'react';

function App() {
  return (
    <div className='App'>
      <Input />
    </div>
  );
}

export default App;

const Input = () => {
  const [inputText, setText] = useState('');

  const removeChar = index => {
    const text = inputText.split('');
    text.splice(index, 1);
    console.log(text.join(''), index);
    setText(text.join(''));
  };

  return (
    <>
      <input
        type='text'
        value={inputText}
        name='testInput'
        id='01'
        onChange={event => setText(event.target.value)}
      />
      <h1>{inputText}</h1>
      <h2>{inputText.length}</h2>
      <Validation length={inputText.length} />
      {inputText.split('').map((el, i) => (
        <Char char={el} key={el + i} clickHandler={() => removeChar(i)} />
      ))}
    </>
  );
};

const Validation = props => {
  let validationText = '';

  if (props.length > 4 && props.length <= 9) {
    validationText = 'ok';
  } else if (props.length > 9) {
    validationText = 'text to long';
  } else {
    validationText = 'text to short';
  }
  return <h1>{validationText}</h1>;
};

const Char = props => {
  const style = {
    padding: '16px',
    border: '1px solid red',
    margin: '16px',
    display: 'inline-block',
  };
  return (
    <div onClick={props.clickHandler} style={style}>
      {props.char}
    </div>
  );
};

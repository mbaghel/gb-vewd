import React from "react";

const Keyboard = props => {
  const listAlphabet = () => {
    const keys = [];
    const aCode = 65;
    for (let i = 0; i < 26; i++) {
      const char = String.fromCharCode(aCode + i);
      keys.push(
        <button onClick={props.handleLetters} key={char}>
          {char}
        </button>
      );
    }
    return keys;
  };

  return (
    <>
      <div>
        {listAlphabet()}
        <button onClick={props.handleLetters}>1</button>
        <button onClick={props.handleLetters}>2</button>
        <button onClick={props.handleLetters}>3</button>
        <button onClick={props.handleLetters}>4</button>
        <button onClick={props.handleLetters}>5</button>
        <button onClick={props.handleLetters}>6</button>
        <button onClick={props.handleLetters}>7</button>
        <button onClick={props.handleLetters}>8</button>
        <button onClick={props.handleLetters}>9</button>
        <button onClick={props.handleLetters}>0</button>
      </div>
      <button onClick={props.backSpace}>{"<-"}</button>
      <button onClick={props.clear}>Cl</button>
    </>
  );
};

export default Keyboard;

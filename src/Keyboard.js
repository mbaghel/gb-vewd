import React from "react";
import { IoMdBackspace } from "react-icons/io";

import "./Keyboard.css";

const Keyboard = ({ setText }) => {
  const addLetter = e => {
    const text = e.target.innerText;
    setText(prevState => prevState + text);
  };

  const space = () => {
    setText(prevState => prevState + " ");
  };

  const backSpace = () => {
    setText(prevState => prevState.slice(0, -1));
  };

  const clear = () => {
    setText("");
  };

  const listAlphabet = () => {
    const keys = [];
    const aCode = 65;
    for (let i = 0; i < 26; i++) {
      const char = String.fromCharCode(aCode + i);
      keys.push(
        <button onClick={addLetter} key={char}>
          {char}
        </button>
      );
    }
    return keys;
  };

  return (
    <div className="keyboard">
      <div className="letters">
        {listAlphabet()}
        <button onClick={addLetter}>1</button>
        <button onClick={addLetter}>2</button>
        <button onClick={addLetter}>3</button>
        <button onClick={addLetter}>4</button>
        <button onClick={addLetter}>5</button>
        <button onClick={addLetter}>6</button>
        <button onClick={addLetter}>7</button>
        <button onClick={addLetter}>8</button>
        <button onClick={addLetter}>9</button>
        <button onClick={addLetter}>0</button>
      </div>
      <div className="special">
        <button onClick={backSpace}>{<IoMdBackspace />}</button>
        <button onClick={space}>SPACE</button>
        <button onClick={clear}>CLEAR</button>
      </div>
    </div>
  );
};

export default Keyboard;

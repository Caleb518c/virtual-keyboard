import React, { useState } from "react";
import Key from "./components/Key";
import "./App.css";
import "animate.css";

function App() {
  const [keyboardMap, setKeyboardMap] = useState(createKeyboardMap());

  const audio = new Audio("src/audio/keypress.mp3");

  function createKeyboardMap() {
    const keyboardChars = "qwertyuiopasdfghjklzxcvbnm";
    let map = [];
    for (let i = 0; i < 26; i++) {
      map[i] = {
        legend: keyboardChars[i],
        isPressed: false,
        key: keyboardChars[i],
      };
    }
    return map;
  }

  const animateKey = (targetKey) => {
    setKeyboardMap((prevKeyboardMap) =>
      prevKeyboardMap.map((key) => {
        if (targetKey.toString() === key.key) {
          return { ...key, isPressed: true };
        } else {
          return key;
        }
      })
    );
  };

  const setIsPressed = (key, value) => {
    setKeyboardMap((prevKeyboardMap) =>
      prevKeyboardMap.map((k) => {
        if (key.toString() === k.key) {
          return { ...k, isPressed: value };
        } else {
          return k;
        }
      })
    );
  };

  return (
    <>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Type here..."
          onKeyUp={(event) => {
            audio.play();
            animateKey(event.key);
          }}
        />
      </div>
      <div className="keyboardContainer">
        {keyboardMap.slice(0, 10).map((key) => (
          <Key
            className="key"
            legend={key.legend}
            isPressed={key.isPressed}
            setIsPressed={(value) => setIsPressed(key.key, value)}
            key={key.key}
          />
        ))}
      </div>
      <div className="keyboardContainer">
        {keyboardMap.slice(10, 19).map((key) => (
          <Key
            className="key"
            legend={key.legend}
            isPressed={key.isPressed}
            setIsPressed={(value) => setIsPressed(key.key, value)}
            key={key.key}
          />
        ))}
      </div>
      <div className="keyboardContainer">
        {keyboardMap.slice(19, 27).map((key) => (
          <Key
            className="key"
            legend={key.legend}
            isPressed={key.isPressed}
            setIsPressed={(value) => setIsPressed(key.key, value)}
            key={key.key}
          />
        ))}
      </div>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "animate.css";

function Key({ legend, isPressed, setIsPressed }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isPressed) {
      setAnimate(true);
      const timeout = setTimeout(() => {
        setAnimate(false);
      }, 250);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isPressed]);

  useEffect(() => {
    if (!animate && isPressed) {
      const timeout = setTimeout(() => {
        setIsPressed(false); // Set isPressed to false using the callback function
      }, 0);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [animate, isPressed, setIsPressed]);

  return (
    <div
      className={`key ${
        animate ? "animate__animated animate__pulse changeBackgroundColor" : ""
      }`}
    >
      <div>{legend}</div>
    </div>
  );
}

export default Key;

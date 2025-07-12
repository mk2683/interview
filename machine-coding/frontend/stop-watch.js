import { useState } from "react";
import "./styles.css";

export default function App() {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const start = () => {
    const newTimerId = setInterval(() => {
      setTime((prevTime) => {
        return prevTime + 10;
      });
    }, 10);
    setTimerId(newTimerId);
  };

  const stop = () => {
    clearTimeout(timerId);
  };

  const reset = () => {
    clearTimeout(timerId);
    setTime(0);
  };

  const convertTime = (time) => {
    const milliSeconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const mins = Math.floor(time / 1000 / 60);

    return (
      <>
        <span>{mins} mins : </span>
        <span>{seconds} s : </span>
        <span>{milliSeconds} ms</span>
      </>
    );
  };

  return (
    <div className="App">
      <div>{convertTime(time)}</div>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

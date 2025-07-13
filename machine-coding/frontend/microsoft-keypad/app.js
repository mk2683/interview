import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [prevBtnValue, setPrevBtnValue] = useState("a-b-c-2");
  const [count, setCount] = useState(0);

  const handleKeyPress = (value) => {
    const values = value.split("-");
    let newvalue;
    if (value === prevBtnValue) {
      const index = count % values.length;
      newvalue = inputValue.substring(0, inputValue.length - 1) + values[index];
      setCount(count + 1);
    } else {
      newvalue = inputValue + values[0];
      setCount(1);
    }
    setPrevBtnValue(value);
    setInputValue(newvalue);
  };

  return (
    <div className="App">
      <div className="keypad-conatiner">
        <div className="msg-container">{inputValue}</div>
        <div className="keypad">
          <div className="key-btns" onClick={() => handleKeyPress("1")}>
            <span className="key"></span>
            <span className="key">1</span>
          </div>
          <div className="key-btns" onClick={() => handleKeyPress("a-b-c-2")}>
            <span className="key">abc</span>
            <span className="key">2</span>
          </div>
          <div className="key-btns" onClick={() => handleKeyPress("d-e-f-3")}>
            <span className="key">def</span>
            <span className="key">3</span>
          </div>
          <div className="key-btns" onClick={() => handleKeyPress("g-h-i-4")}>
            <span className="key">ghi</span>
            <span className="key">4</span>
          </div>
          <div className="key-btns" onClick={() => handleKeyPress("j-k-l-5")}>
            <span className="key">jkl</span>
            <span className="key">5</span>
          </div>
          <div className="key-btns" onClick={() => handleKeyPress("m-n-o-6")}>
            <span className="key">mno</span>
            <span className="key">6</span>
          </div>
          <div className="key-btns" onClick={() => handleKeyPress("p-q-r-s-7")}>
            <span className="key">pqrs</span>
            <span className="key">7</span>
          </div>
          <div className="key-btns" onClick={() => handleKeyPress("t-u-v-8")}>
            <span className="key">tuv</span>
            <span className="key">8</span>
          </div>
          <div className="key-btns" onClick={() => handleKeyPress("w-x-y-z-9")}>
            <span className="key">wxyz</span>
            <span className="key">9</span>
          </div>
          <div className="key-btns" onClick={() => handleKeyPress("0")}>
            <span className="key"></span>
            <span className="key">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

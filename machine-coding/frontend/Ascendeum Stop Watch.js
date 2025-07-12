import {useEffect, useState} from 'react';
import "./styles.css";

export default function App() {

  let [hour, setHour] = useState(0);
  let [min, setMin] = useState(59);
  let [sec, setSec] = useState(53); 
  let [counter, toggelcounter] = useState(false);

  useEffect(()=>{ 
    if (counter) {
      setTimeout(() => {
        let newSecond, newMin, newHour;
        newSecond = parseInt(sec) + 1;
        
        // newHour = parseInt(hour) + 1;
        if(min > 59 ) {
          newHour = parseInt(hour) + 1;
          newMin = 0;
          newSecond = 0;
          setHour(newHour);
          setMin(newMin);
          setSec(newSecond);
        }
         else if (sec > 59) {
          newSecond = 0;
          setSec(newSecond);
          newMin = parseInt(min) + 1;
          setMin(newMin);

        }
        setSec(newSecond);
      }, 1000);
    }
    
  })

  function handleStartClick(){
    toggelcounter(true);
  }

  function handlePauseClick(){
    toggelcounter(false);
  }
  function handleStopClick(){
    setHour(0);
    setMin(0);
    setSec(0);
    toggelcounter(false);
  }

  return (
    <div className="App">
      <p>{hour}</p>:<p>{min}</p>:<p>{sec}</p>
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handlePauseClick}>Pause</button>
      <button onClick={handleStopClick}>Reset</button>
    </div>
  );
}

import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [timer, setTimer] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
  const timerInput = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    timerInput.current.focus(); 
  }, []);

  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  }, [timeLeft, isRunning]);

  const startTimer = () => {
    if (timer > 0) {
      setTimeLeft(timer); 
      setIsRunning(true);

      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => Math.max(prevTimeLeft - 1, 0)); 
      }, 1000);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimeLeft(timer); 
  }

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const progressBarWidth = timer > 0 ? ((timer - timeLeft) / timer) * 100 : 0; // calculate progress percentage

  return (
    <>
      <h1>Timer App</h1>
      <input
        type="number"
        ref={timerInput}
        value={timer}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), 0); // ensure non-negative values
          setTimer(value);
          setTimeLeft(value);
        }}
        placeholder="Enter time in seconds"
      />
      <button onClick={startTimer} disabled={isRunning}>Start Timer</button>
      <button onClick={stopTimer} disabled={!isRunning}>Stop Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
      <div style={{ marginTop: '20px', fontSize: '24px' }}>Time Left: {timeLeft}s</div>

      <div style={{ marginTop: '20px', border: '1px solid #000', width: '100%', height: '30px', backgroundColor: '#e0e0e0' }}>
        <div style={{
          height: '100%',
          width: `${progressBarWidth}%`,
          backgroundColor: 'blue',
          transition: 'width 1s linear'
        }} />
      </div>
    </>
  );
}

export default App;

import './App.css';
import useSound from 'use-sound';
import { useTimer } from 'react-timer-hook';
import { useState, useEffect } from 'react';
import Sound from './alarmMusic.mp3';

// function MyTimer({ expiryTimestamp }) {
//   const [play] = useSound(Sound);
//   const {
//     seconds,
//     minutes,
//     hours,
//     days,
//     isRunning,
//     start,
//     pause,
//     resume,
//     restart,
//   } = useTimer({
//     expiryTimestamp,
//     onExpire: () => {
//       play();
//     },
//     autoStart: false,
//   });

//   return (
//     <div>
//       <h1>Timer</h1>
//       <div style={{ fontSize: "100px" }}>
//         <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
//       </div>
//       <button onClick={start}>Start</button>
//       <button onClick={pause}>Pause</button>
//       <button onClick={resume}>Resume</button>
//       <button
//         onClick={() => {
//           // Restarts to 5 minutes timer
//           const time = new Date();
//           time.setSeconds(time.getSeconds() + 5);
//           restart(time);
//         }}
//       >
//         Restart
//       </button>
//       {isRunning && <p>Running</p>}
//       {!isRunning && <p>Not Running</p>}
//     </div>
//   )
// }

function App() {
  const [inputNumber, setInputNumber] = useState("");
  const timerTime = new Date();
  timerTime.setSeconds(timerTime.getSeconds() + 600);
  const [play] = useSound(Sound);
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: timerTime,
    onExpire: () => {
      play();
    },
    autoStart: false,
  });
  const onClickSetTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + parseInt(inputNumber));
    restart(time);
    setInputNumber("");
  };
  return (
    <div className="App">
      <div>
      <h1>Timer</h1>
      <div style={{ fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      {isRunning && <p>Running</p>}
      {!isRunning && <p>Not Running</p>}
    </div>
      <input type='number' value={inputNumber} onChange={(event) => setInputNumber(event.target.value)}></input>
      <button onClick={onClickSetTimer}>Restart</button>
    </div>
  );
}

export default App;

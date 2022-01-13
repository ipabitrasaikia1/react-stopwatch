
import './App.css';
import { Counter } from './components/Counter';
import { useState } from 'react';
import { Btn } from './components/Btn';

function App() {
  const [time, setTime] = useState({
    h: 0, m: 0, s: 0
    , ms: 0
  });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {

    setInterv(setInterval(() => { run() }, 10))

    setStatus(1)


  }

  const stop = () => {
    // alert("Start") 
    // run() 
    clearInterval(interv)
    setStatus(2)

  }
  const resume = () => {

    setInterv(setInterval(() => { run() }, 10))

    setStatus(1)

  }
  const reset = () => {


    clearInterval(interv)
    setTime({ h: 0, m: 0, s: 0, ms: 0 })
    setStatus(0)

  }

  var updatedH = time.h;
  var updatedM = time.m;
  var updatedS = time.s;
  var updatedMs = time.ms;

  const run = () => {

    if (updatedM === 60) {
      updatedH++
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++
      updatedMs = 0
    }
    updatedMs++

    return setTime({ h: updatedH, m: updatedM, s: updatedS, ms: updatedMs })
  }

  return (
    <div className="App">
      <div> <Counter time={time} /></div>
      <div> <Btn status={status} reset={reset} resume={resume} stop={stop} start={start} /></div>
    </div>
  );
}

export default App;

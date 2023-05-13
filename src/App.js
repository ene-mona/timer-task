import { useState } from "react";

function App() {
  const [timer, setTimer] = useState(5);
  // const [checkTimer, setCheckTimeout] = useState(false);

  const counter = setInterval(() => {
    setTimer(timer - 1);
  }, 1000);
  if (timer === 0) {
    clearInterval(counter);
  }

  return (
    <div className="App">
      <p className="center">{timer}</p>
    </div>
  );
}

export default App;

import './App.css';
import { useEffect, useRef, useState } from "react";

function App() {
  const title = useTypingEffect("Yeojun Han", 500);
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="section-title section-title-intro blinking-cursor">{title}</h1>
        <p>
          ubc computer science<br></br>
          swe & ml enthusiast
        </p>
        <a
          className="App-link"
          href="mailto:yeojunhann@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          email
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/yeojun/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
        <a
          className="App-link"
          href="https://github.com/yeojunh"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <a
          className="App-link"
          href="https://drive.google.com/file/d/1sw_YJ8t9kvhsaSxlCpOgxFRW4DU_nTko/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>
      </header>
    </div>
  );
}

export default App;

export function useTypingEffect(textToType, interKeyStrokeDurationInMs) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const currentPositionRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("interval");
      setCurrentPosition((value) => value + 1);
      currentPositionRef.current += 1;
      if (currentPositionRef.current > textToType.length) {
        clearInterval(intervalId);
      }
    }, interKeyStrokeDurationInMs);
    return () => {
      clearInterval(intervalId);
      currentPositionRef.current = 0;
      setCurrentPosition(0);
    };
  }, [interKeyStrokeDurationInMs, textToType]);

  return textToType.substring(0, currentPosition);
}

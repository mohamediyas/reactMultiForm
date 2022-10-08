import { useState } from "react";

import "./App.css";
import { useMultiform } from "./useMultiform";

function App() {
  const [count, setCount] = useState(0);

  const { step, currentstepIndex, steps } = useMultiform([
    <div>One</div>,
    <div>Two</div>,
    <div>Three</div>,
  ]);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        fontFamily: "Aerial",
      }}
    >
      <form>
        <div
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
          }}
        >
          {currentstepIndex + 1} / {steps.length}
        </div>
      </form>
    </div>
  );
}

export default App;

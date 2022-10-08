import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
      <form></form>
    </div>
  );
}

export default App;

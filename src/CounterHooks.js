import { useState, useContext } from "react";
import { ThemeContext } from "./App";

export function CounterHooks({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const newColor = useContext(ThemeContext);
  return (
    <div>
      <button
        style={newColor}
        onClick={() => setCount((latestCount) => latestCount - 1)}>
        -
      </button>
      <span>{count}</span>
      <button
        style={newColor}
        onClick={() => setCount((latestCount) => latestCount + 1)}>
        +
      </button>
    </div>
  );
}

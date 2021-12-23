import React, { useState, useEffect } from "react";

// indentatzia
export default function Counter({ sendVal }) {
  const [counter, setCounter] = useState(sendVal);
  useEffect(() => {
    setCounter(sendVal);
  }, [sendVal]);
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>click</button>
    </div>
  );
}

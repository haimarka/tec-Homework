import { useState, useCallback } from "react";

const PerformanceCallbackSolution = () => {
  const [flag, setFlag] = useState(false);
  let num = 1;
  useCallback(()=>{
    expensiveCalculation(num);
  },[num])

  function expensiveCalculation(num) {
    let sum = 0;
    console.log("start Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      sum += num;
    }

    console.log(`finish Calculating . sum is ${sum}`);
  }

  return (
    <div>
      <button onClick={() => setFlag(!flag)}>
        Toggle Hello World color takes some time ....
      </button>
      <h2 style={{ color: flag ? "blue" : "brown" }}>Hello World</h2>
    </div>
  );
};

export default PerformanceCallbackSolution;
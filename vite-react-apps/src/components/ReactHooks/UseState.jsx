import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}

export default UseState;

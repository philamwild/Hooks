import React, { useState } from "react";

function Counter() {
  // Déclare une nouvelle variable d'état, que l'on va appeler « count »
  const [count, setCount] = useState(10);
  //const [start, setStart] = useState(0);

  return (
    <div>
      <input value={count} />
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Counter;

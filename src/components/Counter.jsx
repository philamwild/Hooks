import React, { useState } from "react";

function Counter() {
  // Déclare une nouvelle variable d'état, que l'on va appeler « count »
  const [count, setCount] = useState(0);

  return (
    <div>
      <input
        value={count}
        type="number"
        onChange={event => {
          setCount(parseInt(event.target.value));
        }}
      />
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Counter;

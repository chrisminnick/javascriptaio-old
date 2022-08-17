import { useState } from 'react';

function Counter(props) {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
}

export default Counter;

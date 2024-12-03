/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count", count);
    setCount(10);
  }, [setCount]);

  return <div>count: {count}</div>;
}

export default App;

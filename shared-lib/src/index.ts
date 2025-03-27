import { useState, useCallback, version } from "react";

let renderCount = 0;

console.log("react version", version);

export const useCounter = () => {
  renderCount++;
  const [counter, setCounter] = useState(0);
  const increment = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, [setCounter]);
  return [counter, version, renderCount, increment] as const;
};

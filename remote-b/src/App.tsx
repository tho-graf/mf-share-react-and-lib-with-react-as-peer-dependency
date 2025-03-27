import { createRoot } from "react-dom/client";
import { useCounter } from "shared-lib";

const App: React.FC = () => {
  const [counter, reactVersion, renderCount, increment] = useCounter();
  return (
    <>
      <p>
        Hello World from remote-b: {counter} (shared-lib has react-version:{" "}
        {reactVersion}, renderCount: {renderCount})
      </p>
      <button onClick={increment}>increment</button>
    </>
  );
};

const root = createRoot(document.getElementById(`remote-b`));
root.render(<App />);

import { useState } from "react";
import Button from "../components/Button";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg mb-4">
          Edit{' '}
          <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">
            src/components/Counter.jsx
          </code>{' '}
          and save to test HMR
        </p>

        <div className="flex items-center gap-4 my-4">
          {/* used the Button variants instead */}
          <Button variant="danger" onClick={() => setCount(count - 1)}> - </Button>
          <span className="text-xl font-bold">{count}</span>
          <Button variant="success" onClick={() => setCount(count + 1)}> + </Button>
          
        </div>

       
      </div>
    </div>
  );
}

export default Counter;
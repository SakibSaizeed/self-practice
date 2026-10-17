import { useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  console.log("Counter rendered");

  return (
    <div className="p-6 space-y-4 max-w-sm">
      {/* STATE */}
      <div className="border p-4 rounded">
        <h2 className="font-bold">State</h2>
        <p>Count: {count}</p>
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment State
        </button>
      </div>

      {/* REF */}
      <div className="border p-4 rounded">
        <h2 className="font-bold">Ref</h2>
        <p>Count: {ref.current}</p>
        <button
          className="bg-green-500 text-white p-2 rounded"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref এর আসল মান:", ref.current);
          }}
        >
          Increment Ref
        </button>
      </div>
    </div>
  );
};

export default Counter;
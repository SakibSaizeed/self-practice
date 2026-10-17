import { useRef, useEffect, useState } from "react";

export default function RefDemo() {
  const inputRef = useRef(null);
  const boxRef = useRef(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <input ref={inputRef} placeholder="আমি নিজে থেকেই focus পাবো" />

      <button onClick={() => setWidth(inputRef.current.offsetWidth)}>
        Input-এর width মাপো
      </button>
      {width && <p>Width: {width}px</p>}
{/* 
      <button onClick={() => boxRef.current.scrollIntoView({ behavior: "smooth" })}>
        নিচের লাল বক্সে যাও
      </button> */}

      <div style={{ height: 800 }}>(অনেক খালি জায়গা)</div>

      <div ref={boxRef} style={{ background: "tomato", padding: 20 }}>
        আমি লাল বক্স
      </div>
    </div>
  );
}
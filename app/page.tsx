"use client"

import { useState, useEffect } from "react";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState<string>("");

  useEffect(() => {
    // Add a breakpoint here to test the debugger
    console.log("Component mounted, click count:", clickCount);

    return () => {
      console.log("Component will unmount");
    };
  }, [clickCount]);

  const handleClick = () => {
    // Add a breakpoint here to test the debugger
    setClickCount(prev => prev + 1);
    setLastClickTime(new Date().toLocaleTimeString());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Click me!
      </button>
      <div className="text-center">
        <p>Clicked: {clickCount} times</p>
        {lastClickTime && <p>Last click: {lastClickTime}</p>}
      </div>
    </div>
  );
}

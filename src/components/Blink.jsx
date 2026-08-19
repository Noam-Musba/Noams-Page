import React, { useEffect, useState, useRef } from "react";

function Blink() {
  const [isVisible, setIsVisible] = useState(true);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsVisible(!isVisible);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [isVisible]);

  return (
    <span>
      <span
        style={{ visibility: isVisible ? "visible" : "hidden", color: "red" }}
      >
        <strong>Thanks For Coming! Check my Github page! </strong>
      </span>
      <button
        style={{ backgroundColor: "lightgreen" }}
        onClick={() => clearInterval(intervalRef.current)}
      >
        Stop blinking
      </button>
    </span>
  );
}

export default Blink;

import { useEffect, useRef, useState } from "react";

function Blink() {
  const [isVisible, setIsVisible] = useState(true);
  const intervalRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIsVisible(!isVisible);
    }, 1000);
    intervalRef.current = intervalId;

    return () => {
      window.clearInterval(intervalId);
    };
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
        onClick={() => {
          if (intervalRef.current !== undefined) {
            window.clearInterval(intervalRef.current);
          }
        }}
      >
        Stop blinking
      </button>
    </span>
  );
}

export default Blink;

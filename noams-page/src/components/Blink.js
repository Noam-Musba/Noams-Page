import React, { useEffect, useState } from "react";

function Blink() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(!isVisible);
    }, 1000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <span
      style={{ visibility: isVisible ? "visible" : "hidden", color: "red" }}
    >
      <strong>Thanks For Coming! Check my Github page!</strong>
    </span>
  );
}

export default Blink;

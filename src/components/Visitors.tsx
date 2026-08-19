import { memo, useState } from "react";
import type { CSSProperties } from "react";

const visitorsStyles = {
  display: "flex",
  alignItems: "center",
  //paddingLeft: '200px'
} satisfies CSSProperties;

const buttonWrapperStyles = {
  paddingLeft: "20px",
  paddingRight: "10px",
} satisfies CSSProperties;

const buttonStyles = {
  width: "55px",
  height: "20px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
} satisfies CSSProperties;

function Visitors() {
  const [counter, setCounter] = useState(0);
  const [buttonText, setButtonText] = useState("Add!");
  const [isDisabled, setIsDisabled] = useState(false);

  const addVisitor = () => {
    setCounter((prevCount) => {
      return prevCount + 1;
    });
    setButtonText("Added!");
    setIsDisabled(true);
  };

  return (
    <div style={visitorsStyles}>
      <p>Number of visitors: {counter}</p>
      <div style={buttonWrapperStyles}>
        <button style={buttonStyles} onClick={addVisitor} disabled={isDisabled}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default memo(Visitors);

import { useState } from "react";
import { kebabCaseToTitleCase } from "./helpers";
import "./App.css";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const nextColorClass =
    buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  const nextColorTitleCase = kebabCaseToTitleCase(nextColorClass);
  const className = isChecked ? "gray" : buttonColor;

  const onClickButton = () => {
    setButtonColor(nextColorClass);
  };

  return (
    <div>
      <button
        className={className}
        disabled={isChecked}
        onClick={onClickButton}
      >
        Change to {nextColorTitleCase}
      </button>
      <br />
      <input
        type="checkbox"
        id="checkbox-1"
        defaultChecked={false}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label htmlFor="checkbox-1">Disable Button</label>
    </div>
  );
}

export default App;

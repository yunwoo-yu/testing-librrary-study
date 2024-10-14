import { useState } from "react";
import "./App.css";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [buttonColor, setButtonColor] = useState("red");
  const nextColor = buttonColor === "red" ? "blue" : "red";
  const className = isChecked ? "gray" : buttonColor;

  const onClickButton = () => {
    setButtonColor(nextColor);
  };

  return (
    <div>
      <button
        className={className}
        disabled={isChecked}
        onClick={onClickButton}
      >
        Change to {nextColor}
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

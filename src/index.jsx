import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function CharCounter() {
  const [text, setText] = useState("");

  const limit = 50;
  const remaining = limit - text.length;

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="counter-box">
      <h2>React Character Counter</h2>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        maxLength={limit}
      />

      <p className="text-output">{text}</p>

      <p className="count">
        {text.length} / {limit}
      </p>

      {remaining <= 10 && (
        <p className="warning">
          {remaining >= 0
            ? `only ${remaining} characters left`
            : "Limit exceeded"}
        </p>
      )}
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<CharCounter />);

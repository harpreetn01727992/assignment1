import { useState } from "react";

export default function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Conditional Rendering Example</h2>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide" : "Show"} Message
      </button>
      {showMessage && <p style={{ color: "green" }}>🎉 You toggled the message!</p>}
    </div>
  );
}

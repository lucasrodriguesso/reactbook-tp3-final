import { useState } from "react";

function MessageForm({ onAddMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    onAddMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", margin: "20px" }}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Écrivez un message..."
        style={{ padding: "8px", width: "250px", marginRight: "5px" }}
      />
      <button type="submit" style={{ padding: "8px 16px" }}>
        Publier
      </button>
    </form>
  );
}

export default MessageForm;

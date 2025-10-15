import { useState } from "react";
import MessageForm from "./MessageForm";

function MessageBoard() {
  console.log("render <MessageBoard>");  
  const [messages, setMessages] = useState([]);

  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div>
      <MessageForm onAddMessage={addMessage} />
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;

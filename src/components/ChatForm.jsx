import React from "react";

const ChatForm = ({ setChatHistory, generateBotResponse, chatHistory }) => {
  const inputRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    console.log("User Message:", userMessage);
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { role: "user", text: userMessage },
    ]);
    setTimeout(() => {
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { role: "model", text: `thinking` },
      ]);
      generateBotResponse([
        ...chatHistory,
        { role: "user", text: userMessage },
      ]);
    }, 600);

    inputRef.current.value = "";
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button className="material-symbols-outlined">arrow_upward</button>
    </form>
  );
};

export default ChatForm;

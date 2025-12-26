import React, { useState } from "react";
import ChatvotIcon from "./components/ChatvotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  const generateBotResponse = async (history) => {


    const updateHistory =(text)=>{
 setChatHistory(prev=>[...prev.filter(msg=>msg.text!=='thinking'),{role:'model',text}]);
    }

    // Convert history to Gemini format
    const formattedHistory = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": import.meta.env.VITE_GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: formattedHistory,
      }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Something went wrong!");
      }

      const botMessage = data.candidates[0].content.parts[0].text;

      const apiResponseText=botMessage.replaceAll('\n',' ').trim();

      console.log("Bot reply:", botMessage);

      updateHistory(apiResponseText);

      return botMessage;
    } catch (error) {
      console.error("Gemini Error:", error.message);
    }
  };

  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* Chat Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatvotIcon size={40} color="#000000" />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-outlined">
            keyboard_arrow_down
          </button>
        </div>

        <div className="chat-body">
          <div className="message bot-message">
            <ChatvotIcon size={40} color="#000000" />
            <div className="message-text">
              Hello! How can I assist you today?
            </div>
          </div>

          {chatHistory.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
        </div>

        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

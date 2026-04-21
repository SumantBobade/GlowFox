import { useState } from "react";
import { MessageSquare } from "lucide-react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hey 👋 I'm GlowFox AI. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);

    setInput("");

    try {
      const res = await fetch("http://localhost:5001/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Something went wrong." },
      ]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "linear-gradient(135deg, #ff7a00, #ff3d5a)",
          color: "#fff",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0 0 15px rgba(255, 100, 0, 0.6)",
          zIndex: 999,
        }}
      >
        <MessageSquare size={26} />
      </div>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "320px",
            height: "420px",
            background: "#0d0d0d",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 0 20px rgba(0,0,0,0.7)",
            border: "1px solid #222",
            zIndex: 999,
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "12px",
              background: "linear-gradient(135deg, #ff7a00, #ff3d5a)",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            GlowFox Assistant
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              fontSize: "14px",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "10px",
                  textAlign: msg.role === "user" ? "right" : "left",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "10px",
                    background: msg.role === "user" ? "#ff7a00" : "#1a1a1a",
                    color: "#fff",
                    maxWidth: "80%",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              borderTop: "1px solid #222",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: "10px",
                border: "none",
                outline: "none",
                background: "#111",
                color: "#fff",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                padding: "10px 15px",
                background: "#ff7a00",
                border: "none",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

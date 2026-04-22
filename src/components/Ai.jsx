import React, { useState, useRef, useEffect } from "react";
import "../stylesheets/Ai.css";

const SUGGESTIONS = [
  "Explain quantum computing simply",
  "Write a short poem about the ocean",
  "Give me 5 productivity tips",
  "What's the meaning of life?",
];

function Ai() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef();

  // Replace with your actual Groq API Key (Remember to move this to your backend later!)
  const API_KEY = import.meta.env.VITE_GROQ_API_KEY;
  const API_URL = "https://api.groq.com/openai/v1/chat/completions";
  // Specify a Groq-hosted model (e.g., Llama 3 8B)
  const MODEL = "llama-3.3-70b-versatile";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const generate = async (prompt) => {
    const userText = prompt || input.trim();
    if (!userText || loading) return;

    setMessages((prev) => [...prev, { type: "user", text: userText }]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [{ role: "user", content: userText }],
          // Groq is fast, but you can still control tokens/temperature here if needed
          // temperature: 0.7,
          // max_tokens: 1024,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Failed to fetch AI response");
      }

      const data = await response.json();
      
      // Groq uses the standard OpenAI response format
      const aiResponse = data?.choices?.[0]?.message?.content || "No response from AI.";
      
      setMessages((prev) => [...prev, { type: "ai", text: aiResponse }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { type: "ai", text: `Sorry, something went wrong: ${error.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && input.trim() && !loading) generate();
  };

  return (
    <div className="aichatroom">
      <div className="ai-messages">
        {messages.length === 0 ? (
          <div className="ai-empty">
            <div className="ai-empty-icon">🤖</div>
            <h3>Groq AI Chat</h3>
            <p>Your ultra-fast assistant, ready to help. Ask a question or try a suggestion below.</p>
            <div className="ai-suggestion-chips">
              {SUGGESTIONS.map((s) => (
                <button key={s} className="chip" onClick={() => generate(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <div key={index} className={`ai-message ${message.type}`}>
              <div className="ai-msg-avatar">
                {message.type === "ai" ? "🤖" : "👤"}
              </div>
              <div className="ai-msg-bubble">{message.text}</div>
            </div>
          ))
        )}

        {loading && (
          <div className="ai-message ai ai-thinking">
            <div className="ai-msg-avatar">🤖</div>
            <div className="ai-thinking-bubble">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="ai-input-area">
        <div className="ai-input-wrap">
          <input
            type="text"
            placeholder="Ask anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            disabled={loading}
          />
        </div>
        <button
          className="ai-send-btn"
          onClick={() => generate()}
          disabled={!input.trim() || loading}
        >
          ➤
        </button>
      </div>
    </div>
  );
}

export default Ai;
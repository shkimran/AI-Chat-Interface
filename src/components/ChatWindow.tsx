import { useState } from "react";
import MarkdownRenderer from "./ResponseRenderer/MarkdownPreview";
import CodeRenderer from "./ResponseRenderer/CodeRenderer";
import type { Message } from "../App";

const ChatWindow = ({
  messages,
  onSend,
  loading,
}: {
  messages: Message[];
  onSend: (msg: string) => void; loading: boolean;
}) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div className="flex-1 flex flex-col max-w-4xl mx-auto">
      <div className="flex-1 overflow-auto p-4">
        {messages.map((msg, idx) => {
          const isCode = msg.content.includes("```");
          const bubbleStyle =
            msg.role === "user"
              ? "bg-gray-500 text-right text-white rounded-[1px_8px_8px_24px]"
              : "bg-gray-200 text-left rounded-[8px_1px_24px_8px]";

          return (
            <div key={idx} className={`p-2 my-3 rounded ${bubbleStyle} `}>
              {isCode ? (
                <CodeRenderer content={msg.content} />
              ) : (
                <MarkdownRenderer content={msg.content} />
              )}
            </div>
          );
        })}
        {loading && (
  <div className="p-2 my-1 bg-gray-200 rounded text-gray-600 italic animate-pulse">
    AI is thinking...
  </div>
)}
      </div>

      <div className="p-4 mx-2 border-t flex items-center bg-gray-500 lg:py-7 lg:px-[20px] rounded-[20px] mb-9">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 lg:p-2  text-white rounded mr-2 focus:outline-none lg:text-xl"
          placeholder="Ask something..."
        />
        <button
          onClick={handleSend}
          className="bg-white text-gray-500 lg:text-2xl lg:h-12 lg:w-12 w-8 h-8 rounded-full cursor-pointer shadow-xl hover:bg-slate-200 transition-all duration-300 "
        >
          🡩
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;

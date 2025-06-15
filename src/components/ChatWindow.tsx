import { useState } from "react";
import MarkdownRenderer from "./ResponseRenderer/MarkdownPreview";
import CodeRenderer from "./ResponseRenderer/CodeRenderer";
import type { Message } from "../App";

const ChatWindow = ({
  messages,
  onSend,
}: {
  messages: Message[];
  onSend: (msg: string) => void;
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
      </div>

      <div className="p-4 border-t flex bg-gray-500 py-7 px-[20px] rounded-[20px] mb-9">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 p-2  text-white rounded mr-2 focus:outline-none text-xl"
          placeholder="Ask something..."
        />
        <button
          onClick={handleSend}
          className="bg-white text-gray-500 text-2xl h-12 w-12 rounded-full cursor-pointer shadow-xl hover:bg-slate-200 transition-all duration-300 "
        >
          🡩
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;

import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import { initializeChat, getChatResponse } from "./api/chatApi";

export type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
const [loading, setLoading] = useState(false);

  useEffect(() => {
    initializeChat();
  }, []);

const sendMessage = async (input: string) => {
  const userMsg: Message = { role: "user", content: input };
  setMessages((prev) => [...prev, userMsg]);
  setLoading(true); 

  try {
    const reply = await getChatResponse(input);
    const aiMsg: Message = { role: "assistant", content: reply };
    setMessages((prev) => [...prev, aiMsg]);
  } finally {
    setLoading(false); 
  }
};

  return (
    <div className="flex h-screen bg-gray-800">
      <Sidebar messages={messages} />
      <ChatWindow messages={messages} loading={loading} onSend={sendMessage} />
    </div>
  );
}

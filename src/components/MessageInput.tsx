import  { useState } from "react";

type Props = { onSend: (text: string) => void };
const MessageInput = ({ onSend }: Props) => {
  const [text, setText] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onSend(text);
        setText("");
      }}
      className="mt-4 flex"
    >
      <input
        className="flex-1 border p-2 rounded-l"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded-r">
        Send
      </button>
    </form>
  );
};

export default MessageInput;
import  { useState } from "react";
import type { Message } from "../App";

const Sidebar = ({ messages }: { messages: Message[] }) => {
  const [collapsed, setCollapsed] = useState(false);

  // Group messages into chat sessions (basic version: by every user message)
  const userMessages = messages.filter((msg) => msg.role === "user");

  return (
    <div
      className={`${
        collapsed ? "w-16" : "w-64"
      } bg-gray-900 text-white transition-all duration-300 flex flex-col p-4`}
    >
      <button
        className="mb-4 bg-gray-700 p-2 rounded"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? ">" : "<"}
      </button>

      {!collapsed && (
        <>
          <h2 className="font-bold mb-2">Chat History</h2>
          <div className="flex-1 overflow-y-auto space-y-2 text-sm">
            {userMessages.length > 0 ? (
              userMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className="bg-gray-700 p-2 rounded hover:bg-gray-600 truncate cursor-pointer"
                  title={msg.content}
                >
                  {msg.content.slice(0, 25)}...
                </div>
              ))
            ) : (
              <div className="text-gray-400">No chats yet</div>
            )}
          </div>
          {/* <button className="mt-4 bg-red-600 p-2 rounded">Logout</button> */}
        </>
      )}
    </div>
  );
};

export default Sidebar;

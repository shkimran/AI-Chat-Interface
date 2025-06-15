import { useEffect, useState } from "react";
import type { Message } from "../App";

const Sidebar = ({ messages }: { messages: Message[] }) => {
  const [collapsed, setCollapsed] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      }
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const userMessages = messages.filter((msg) => msg.role === "user");

  return (
    <>

      <div
        className={`fixed inset-y-0 left-0 z-50 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out
          ${collapsed ? "-translate-x-full" : "translate-x-0"} md:relative md:translate-x-0 
          ${collapsed ? "w-0" : "w-64"} md:w-64 flex flex-col p-4`}
      >
        <button
          className="mb-4 bg-gray-700 p-2 rounded self-end md:hidden"
          onClick={() => setCollapsed(true)}
        >
          ✕
        </button>

        {!collapsed &&(<h2 className="font-bold mb-2">Chat History</h2>)}
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
      </div>

    
      {collapsed && (
        <button
          className="fixed top-4 left-4 z-50 p-2 rounded bg-gray-800 text-white md:hidden"
          onClick={() => setCollapsed(false)}
        >
          ☰
        </button>
      )}
    </>
  );
};

export default Sidebar;

import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY!);


let chat: any = null;

export const initializeChat = async () => {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  chat = model.startChat({
    history: [], 
  });

  return chat;
};

export const getChatResponse = async (userMessage: string) => {
  try {
    if (!chat) await initializeChat();

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    return response.text();
  } catch (err) {
    console.error("Gemini API Error:", err);
    return "❌ Error getting response from Gemini.";
  }
};

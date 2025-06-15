# 🧠 AI Chat Interface – Contextual Gemini Chat App

Live Demo: [https://ai-chat-interface-react.netlify.app/](https://ai-chat-interface-react.netlify.app/)  
GitHub Repo: [https://github.com/shkimran/AI-Chat-Interface](https://github.com/shkimran/AI-Chat-Interface)

---

## 📌 Project Overview

This is a lightweight, production-ready MVP of a contextual AI-powered chat interface built with **Vite + React** and powered by **gemini-2.0-flash** via the **Generative AI API**. It includes dynamic message rendering based on context (code, markdown, etc.), session history in the sidebar, and smart AI message handling.

---

## ✅ Features Implemented

- 🔁 Persistent AI Session: Maintains chat history with Gemini's session handling
- 📚 Sidebar with Chat History: Displays all user messages
- 🧠 AI Integration: Uses Google’s Gemini-2.0-flash
- 🎨 Contextual Output:
  - Markdown → Rendered markdown viewer
  - Code → Live Monaco editor
- 💬 Real-time messaging: Smooth interaction with AI with loading states
- 🌙 Dark mode-ready layout: Styled with Tailwind CSS
- 🚀 Fully Deployed: Live on Vercel

---

## 🧠 AI Tool Usage

- **Gemini API** from [Google Generative AI](https://ai.google.dev/)
- Used for:
  - Natural language understanding
  - Generating contextual responses (markdown, code, plain text)
- The chat is started using `startChat()` and maintained via a global chat session (`history[]`).
- Prompts and completions are managed asynchronously with `sendMessage()`.

---

## ⚠️ Known Limitations

- Session history not saved across page reloads (stored in-memory only)
- No backend: Chat sessions are not stored in a database
- Limited formatting types: Tables, images, and slides are not deeply parsed yet
- Gemini API key is required: You need your own key set in `.env`

---

## 🔧 What I’d Improve with More Time

- 🧠 Add persistent session storage (e.g., localStorage or Firebase)
- ➕ Add support for media, tables, and slide-style markdown parsing
- 🔐 Add user authentication (e.g., Firebase Auth or Clerk)
- 🗃️ Multi-session management in sidebar with timestamps
- 📱 Improve mobile responsiveness & accessibility

---

## ⚙️ Tech Stack

- **Frontend**: React 19, Vite, TypeScript
- **Styling**: Tailwind CSS
- **AI**: Gemini-2.0-flash `@google/generative-ai`
- **Editor**: `@monaco-editor/react`
- **Markdown**: `react-markdown`

---

## 🚀 Getting Started Locally

```bash
git clone https://github.com/shkimran/AI-Chat-Interface
cd ai-gemini-chat
npm install
```

Create a `.env` file:

```
VITE_GEMINI_API_KEY=your_google_ai_api_key
```

Run locally:

```bash
npm run dev
```

---

## 📦 Deployment

Deployed to **Vercel**. Add your `VITE_GEMINI_API_KEY` in project settings.
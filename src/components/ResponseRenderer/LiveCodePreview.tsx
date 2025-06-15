import { useState } from "react";
import Editor from "@monaco-editor/react";

const defaultCode = `
<html>
  <head><style>body { font-family: sans-serif; }</style></head>
  <body>
    <h1>Hello World</h1>
    <p>This is live preview!</p>
  </body>
</html>
`;

const LiveCodePreview = ({ initialCode }: { initialCode?: string }) => {
  const [code, setCode] = useState(initialCode || defaultCode);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="border rounded">
        <Editor
          height="300px"
          language="html"
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="vs-dark"
        />
      </div>
      <div className="border rounded overflow-hidden bg-white">
        <iframe
          srcDoc={code}
          title="Live Preview"
          sandbox="allow-scripts"
          className="w-full h-[300px]"
        />
      </div>
    </div>
  );
};

export default LiveCodePreview;

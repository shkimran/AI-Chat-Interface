import Editor from '@monaco-editor/react';

export default function CodeRenderer({ content }: { content: string }) {
  const code = content.replace(/```(.*?)\n/, '').replace(/```$/, '');
  return (
    <div className="mt-2">
      <Editor
        height="50vh"
        language="javascript"
        value={code}
        theme="vs-dark"
        options={{ readOnly: true }}
      />
    </div>
  );
}

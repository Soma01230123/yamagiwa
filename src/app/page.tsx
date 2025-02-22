"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!file) {
      alert("ファイルを選択してください");
      return;
    }
    alert(`提出されたファイル: ${file.name}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* PowerPoint 添削システム */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">📂 PowerPoint 添削システム</h1>

      {/* ファイル選択 */}
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="mb-4 p-2 border border-gray-900 rounded"
      />

      {/* 提出ボタン */}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        提出
      </button>
    </div>
  );
}

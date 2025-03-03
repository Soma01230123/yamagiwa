"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("ファイルを選択してください");
      return;
    }

    setIsLoading(true);

    try {
      // 仮の処理（実際にはAPIリクエストなど）
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // `/processing` に遷移し、ファイル名をクエリパラメータで渡す
      router.push(`/processing?file=${encodeURIComponent(file.name)}`);
    } catch (error) {
      alert("ファイルのアップロードに失敗しました");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
        📂 PowerPoint 添削システム
      </h1>

      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 p-2 border border-gray-900 rounded"
        disabled={isLoading}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition disabled:bg-gray-400"
        disabled={isLoading}
      >
        {isLoading ? "送信中..." : "提出"}
      </button>
    </div>
  );
}

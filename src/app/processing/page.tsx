"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Processing() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const fileName = searchParams.get("file");

  useEffect(() => {
    // 仮の処理（実際にはバックエンドとの通信）
    const processFile = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000)); // 5秒の処理待ち
      router.push("/result"); // 処理が終わったら結果ページに遷移
    };

    processFile();
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">🔄 処理中...</h1>
      <p className="text-gray-700">ファイル <strong>{fileName}</strong> を処理しています。しばらくお待ちください。</p>

      <div className="mt-4 flex items-center space-x-2">
        <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-gray-700">処理中...</span>
      </div>
    </div>
  );
}

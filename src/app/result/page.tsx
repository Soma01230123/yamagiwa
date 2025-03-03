"use client";
import { useRouter } from "next/navigation";

export default function Result() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">✅ 処理完了！</h1>
      <p className="text-gray-700">ファイルの処理が完了しました。</p>

      <button
        onClick={() => router.push("/")}
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        ホームに戻る
      </button>
    </div>
  );
}

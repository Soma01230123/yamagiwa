"use client";

import React from "react";
import Link from "next/link"; // Next.js の Link をインポート
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarHome: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* 左側のメニュー欄 */}
      <aside className="w-1/5 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold mb-4">メニュー</h2>
        <ul>
          <li className="mb-2">
            <Link href="/calendar" className="hover:underline">📅 カレンダー</Link>
          </li>
          <li className="mb-2">
            <Link href="/schedule" className="hover:underline">📌 予定一覧</Link>
          </li>
          <li className="mb-2">
            <Link href="/todo" className="hover:underline">✅ To-Do</Link>
          </li>
          <li className="mb-2">
            <Link href="/share" className="hover:underline">🔗 共有</Link>
          </li>
        </ul>
      </aside>

      {/* メインコンテンツ */}
      <main className="flex-1 p-4 grid grid-cols-3 gap-4">
        {/* カレンダー */}
        <section className="col-span-2 bg-white shadow-lg rounded-lg p-4">
          <h1 className="text-2xl font-bold mb-4">予定管理カレンダー</h1>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            selectable={true}
            events={[]}
          />
        </section>

        {/* 右側の予定リスト */}
        <section className="flex flex-col gap-4">
          {/* 今日の予定 */}
          <div className="bg-white shadow-lg rounded-lg p-4 h-1/6">
            <h2 className="text-lg font-bold">📆 今日の予定</h2>
            <ul>
              <li>✅ 会議 10:00</li>
              <li>✅ ランチ 12:00</li>
            </ul>
          </div>

          {/* 今週の予定 */}
          <div className="bg-white shadow-lg rounded-lg p-4 h-1/6">
            <h2 className="text-lg font-bold">📅 今週の予定</h2>
            <ul>
              <li>📌 プレゼン資料作成</li>
              <li>📌 チームミーティング</li>
            </ul>
          </div>

          {/* To-Do リスト（高さ2倍） */}
          <div className="bg-white shadow-lg rounded-lg p-4 h-2/3">
            <h2 className="text-lg font-bold">✅ To-Do リスト</h2>
            <ul>
              <li>📝 メール返信</li>
              <li>📝 企画書作成</li>
              <li>📝 フィードバック対応</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CalendarHome;

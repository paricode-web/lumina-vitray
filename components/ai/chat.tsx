"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

export default function Chat() {
  const [input, setInput] = useState("");

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    sendMessage({
      text: input,
    });

    setInput("");
  }

  return (
    <div className="mx-auto flex h-[600px] w-full max-w-2xl flex-col rounded-2xl border bg-white p-4">

      <div className="flex-1 space-y-4 overflow-y-auto">

        {messages.map((message) => (
          <div
            key={message.id}
            className={
              message.role === "user"
                ? "text-right"
                : "text-left"
            }
          >
            <p className="mb-1 font-semibold">
              {message.role === "user" ? "شما" : "Lumina AI"}
            </p>

            {message.parts.map((part, index) => {

              // پیام معمولی متنی
              if (part.type === "text") {
                return (
                  <p key={index} className="whitespace-pre-wrap">
                    {part.text}
                  </p>
                );
              }

              // Tool مربوط به searchProducts
              if (part.type === "tool-searchProducts") {
                return (
                  <div
                    key={index}
                    className="my-2 rounded-xl bg-slate-100 p-3 text-sm"
                  >
                    {part.state === "input-streaming" && (
                      <p>در حال آماده‌سازی جستجو...</p>
                    )}

                    {part.state === "input-available" && (
                      <p>در حال جستجوی محصولات...</p>
                    )}

                    {part.state === "output-available" && (
                      <div>
                        <p className="mb-2 font-semibold">
                          نتایج جستجو:
                        </p>

                        <pre className="overflow-x-auto text-xs">
                          {JSON.stringify(part.output, null, 2)}
                        </pre>
                      </div>
                    )}

                    {part.state === "output-error" && (
                      <p className="text-red-600">
                        جستجوی محصولات با خطا مواجه شد.
                      </p>
                    )}
                  </div>
                );
              }

              return null;
            })}
          </div>
        ))}

      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-4 flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="پیامت رو بنویس..."
          className="flex-1 rounded-xl border px-4 py-3"
        />

        <button
          type="submit"
          disabled={status !== "ready"}
          className="rounded-xl bg-black px-5 py-3 text-white disabled:opacity-50"
        >
          ارسال
        </button>
      </form>
    </div>
  );
}
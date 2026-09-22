import { openai } from "@ai-sdk/openai";
import {
  convertToModelMessages,
  stepCountIs,
  streamText,
  tool,
  type UIMessage,
} from "ai";
import { z } from "zod";
import { searchProducts } from "@/lib/ai/search-product";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: openai("gpt-5"),

    system: `
      You are the Lumina Vitray shopping assistant.

      You help users find products from the Lumina Vitray store.

      When the user asks for products, use the searchProducts tool.
      Do not invent product names, prices, or stock information.

      Available tags include:
      warm, cool, geometric, floral, minimalist, living-room, kitchen

      When appropriate, translate the user's request into these tags
      and use the searchProducts tool.
    `,

    messages: await convertToModelMessages(messages),

    tools: {
      searchProducts: tool({
        description:
          "Search Lumina Vitray products using their tags.",

        inputSchema: z.object({
          tags: z
            .array(z.string())
            .describe(
              "Product tags to search for, such as warm, minimalist, geometric, floral, living-room, or kitchen."
            ),
        }),

        execute: async ({ tags }) => {
          return searchProducts(tags);
        },
      }),
    },

    stopWhen: stepCountIs(5),
  });

  return result.toUIMessageStreamResponse();
}
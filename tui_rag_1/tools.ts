import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { generateText, tool, stepCountIs } from 'ai';
import { z } from 'zod';
import koffi from "koffi"

export const ragSearch = tool({
  description: 'RAG検索を行う',
  inputSchema: z.object({
    query: z.string().min(1, { message: '検索クエリーは必須です' }),
  }),
  execute: async ({ query }) => {
    const lib = koffi.load('./libsample.so');
    const rag_search = lib.func('char* rag_search(const char* input)');
    const resp = rag_search(query); 
    return resp; 
  },
});

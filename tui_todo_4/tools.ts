import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { generateText, tool, stepCountIs } from 'ai';
import { z } from 'zod';
import koffi from "koffi"

export const todoAdd = tool({
  description: 'TODO(やる事) を登録する',
  inputSchema: z.object({
    title: z.string().min(1, { message: 'タイトルは必須です' }),
  }),
  execute: async ({ title }) => {
    const lib = koffi.load('./libsample.so');
    const todoAdd = lib.func('char* todo_add(const char* input)');
    todoAdd(title); 
    return `TODO add : ${title}`; 
  },
});
export const todoList = tool({
  description: 'TODO一覧を取得する',
  inputSchema: z.object({}),
  execute: async () => {
    const lib = koffi.load('./libsample.so');
    const todoList = lib.func('char* todo_list()');
    const resp = todoList();
    return resp; 
  },
});
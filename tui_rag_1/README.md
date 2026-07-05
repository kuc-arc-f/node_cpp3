# tui_rag_1

 Version: 0.9.1

 Author  :

 date    : 2026/07/04

 update :

***

node.js C++ , Ink TUI RAG SQLite OpenRouter

* OpenRouter + Vercel AI SDK
* embedding : Gemini-embedding-001
* SQLite databse
* nod.js call C++ so (Shared Object)
* node 22
* C/C++
* LLVM CLang
+ make
* Linux

***
### vector data add

https://github.com/kuc-arc-f/rust_cpp1/tree/main/rs_rag_4

***
## Image

* RAG APP

![img1](/images/tui_rag_1.png)

***
### related

https://openrouter.ai/

https://openrouter.ai/docs/guides/community/vercel-ai-sdk

***
### setup

* .env

```
OPENROUTER_API_KEY=your-key
OPENROUTER_MODEL=deepseek/deepseek-v4-flash
GEMINI_API_KEY=your-key
```

* LIB add
```
sudo apt install uuid-dev
sudo apt install nlohmann-json3-dev
sudo apt install libsqlite3-dev
sudo apt install libcurl4-openssl-dev
```
***
* example.db
* rs_rag_4/example.db , file copy

***
* C++ build
```
make all
```

* npm add
```
npm i
npm run start
```
***
* prompt
```
hello , RAG search please
```

***

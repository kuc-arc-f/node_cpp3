# tui_sqlite_1

 Version: 0.9.1

 Author  :

 date    : 2026/07/04

 update :

***

node.js C++ , Ink TUI TODO SQLite

* OpenRouter + Vercel AI SDK
* tool use
* SQLite databse
* Ink TUI
* nod.js call C++ so (Shared Object)
* node 22
* LLVM CLang
* C/C++
* Linux

***
## image

* TODO APP

![img1](/images/tui_sqlite_1.png)


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
```

* LIB add
```
sudo apt-get install libsqlite3-dev
sudo apt install nlohmann-json3-dev
```

***
* C++ build
```
clang++ -shared -fPIC -lsqlite3 sample.cpp -o libsample.so
```

* node start
```
npm i
npm run start
```
***
* use

* add
```
todoAdd hello
```

* list
```
todoList
```

***
### blog

https://zenn.dev/knaka0209/scraps/c0e330177e795b


# tui_todo_4

 Version: 0.9.1

 Author  :

 date    : 2026/07/04

 update :

***

node.js C++ , Ink TUI TODO tool

* json file save
* OpenRouter + Vercel AI SDK
* Ink TUI
* nod.js call C++ so (Shared Object)
* node 22
* gcc version 14.2.0
* C/C++
* Linux

***
## image

* TODO APP

![img1](/images/tui_todo_4.png)


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
sudo apt install nlohmann-json3-dev
```

***
* C++ build
```
g++ -shared -fPIC sample.cpp -o libsample.so
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

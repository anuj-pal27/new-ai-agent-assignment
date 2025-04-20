# 🧠 AI Shell Agent

A command-line AI Agent that receives a natural language task, generates a plan using a free AI API, asks for your approval, and then executes the task locally step-by-step. If it fails, it retries after refining the task using AI.

## 🚀 Features

- 🧑‍💻 Accepts natural language task input
- 🧠 Uses a free AI model (OpenRouter + OpenChat) to generate shell commands
- 👀 Displays the plan and asks for approval
- 🖥️ Executes commands locally via Node.js
- ✅ Verifies if the task succeeded
- 🔁 On failure, asks for error description and retries with a refined plan
- 💬 Run from command line — VS Code extension support is a future bonus!

---

## 📸 Demo

```bash
$ node index.js
🤖 What task would you like the AI agent to do?
> Run a Python script that prints "Hello, world!"

🧠 AI Plan:
echo "print('Hello, world!')" > hello.py
python hello.py

Do you approve this plan? (y/n): y

🚀 Executing command: echo "print('Hello, world!')" > hello.py
✅ Output:

🚀 Executing command: python hello.py
✅ Output:
Hello, world!

✅ Was the task successful? (yes/no): yes
🎉 Task completed successfully!

```
## 📦 Installation

1.Clone the repo

git clone https://github.com/anuj-27/ai-shell-agent.git
cd ai-shell-agent

2. Install dependencies
npm install

3. Set your OpenRouter API key
Create a .env file and add:
OPENROUTER_API_KEY=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

4. ▶️ Usage
npm agent.js


✅ Example Task Ideas
Run a Python or JS script

Initialize a Git repo

Make a file, write text, and print it

Install and run a local server

🧠 Future Ideas
VS Code extension

Agent memory for task history

Plan diff before retry

Natural language → multi-step workflows

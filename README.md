# Sware Task Manager

## 🚀 Overview

The **Sware Task Manager** is a simple and efficient web application to manage your daily tasks. It allows you to add, mark as completed, and delete tasks. Additionally, data is stored in localStorage, keeping your tasks saved even after refreshing the page.

🔗 **Live demo:** [sware-todo-app.vercel.app](https://sware-todo-app.vercel.app/)

## 🛠️ Technologies Used

- **React 19** — Library for building the interface
- **TailwindCSS** — Modern and responsive styling
- **Axios** — For API consumption
- **Vite** — Fast development environment

## 🎯 Features

- 📌 **Add Tasks** — Easily create new tasks
- ✅ **Mark as Completed** — Track your progress
- 🗑️ **Delete Tasks** — Remove unwanted tasks
- 💾 **Local Storage** — Tasks remain saved
- 🔄 **API Consumption** — Initial task loading from an external API

## 📁 Project Structure

```
📂 sware-todo-app
│
├── 📁 src
│   ├── 📄 App.jsx
│   ├── 📄 index.css
│   ├── 📄 main.jsx
│   ├── 📁 assets
│   │   ├── 📁 img
│   │   │   ├── 📄 delete-icon.svg
│   │   │   ├── 📄 plus-icon.svg
│   │   │   └── 📄 sware-logo.png
│   ├── 📁 components
│   │   ├── 📁 AddTaskForm
│   │   │   └── 📄 index.jsx
│   │   ├── 📁 TaskItem
│   │   │   └── 📄 index.jsx
│   │   ├── 📁 TaskList
│   │   │   └── 📄 index.jsx
│   │   └── 📁 TaskManager
│   │       └── 📄 index.jsx
│   └── 📁 contexts
│       └── 📄 TaskContext.js
```

## 🔧 Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/sware-todo-app.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd sware-todo-app
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open in the browser:**

   ```
   http://localhost:5173
   ```
   
---

Made with ❤️ by [**Luiz Lopes**](https://github.com/luizlopes12)


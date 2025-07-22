
# 💬 FANG - Fast Access to Native Language Globally

A real-time chat application designed to connect users across the globe — regardless of language barriers. FANG (Fast Access to Native-language Globally) provides seamless messaging, secure login, image sharing, and **dynamic message translation**, all inside a beautifully responsive UI.

---

## 💡 Project Overview

**FANG** is a MERN stack-based messaging platform built to simplify multilingual communication. With real-time chat, avatar support via Cloudinary, and a smart translation system using Google Translate’s web widget, FANG ensures every message is understood — no matter the language.

> Whether you’re chatting with a friend across the street or across the world, FANG makes it effortless.

---

## 🚀 Features

- 🔐 **User Authentication**: Register and login securely with JWT-based authentication.
- 💬 **Real-time Messaging**: Communicate instantly using Socket.io.
- 🌍 **Smart Translation**: Translate messages using Google Translate script (message content is translated only in the UI not in Database).
- 🖼️ **Media Uploads**: Upload avatars or media using Cloudinary.
- 📁 **Message History**: Easily scroll and view past conversations.
- ⚡ **Responsive UI**: Works seamlessly across devices using Tailwind CSS.
- 📃 **Protected Routes**: Access control for chat and profile pages.

---

## 📦 Prerequisites

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (v4.4 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- Git

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/buckysurya/fang.git
cd fang
```
### 2. Backend Setup

```bash
# Navigate to backend root (already here in root directory)
cd backend

#install dependencies
npm install

# Create a .env file and configure it
touch .env
```

Backend .env file format:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

To run the server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```
To run frontend

```bash
npm run dev
```

## 🧠 Translation Logic

Unlike most apps that use expensive APIs, FANG uses the Google Translate Web Widget to translate chat messages only — leaving the interface untouched.

```html
script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
```
Using the notranslate class, you control what gets translated:

-✅ **Chat message boxes** → translated
-🚫 **UI components** → ignored

This ensures the interface remains clean while message translation is accurate.

## 🧪 Development

Backend Server:
```bash
npm run dev
```

Frontend Server:
```bash
npm run dev
```
## 🚀 Production Deployment

Build the frontend
```bash
cd frontend
npm run build
```
Then serve it with a backend server or deploy both to a platform like Render, Heroku, or Vercel + Railway.

## 🧩 Troubleshooting

**MongoDB Issues**

-Check if MongoDB is running locally or replace with MongoDB Atlas.
-Ensure .env contains the correct URI.

**Port Conflicts**

-Make sure 5001 (backend) and 5173 (frontend) are available.
-You can change them in .env and package.json.

**Node Modules Errors**

```bash
rm -rf node_modules
rm package-lock.json
npm install
```
## 🤝 Contributing

We welcome contributions to enhance FANG’s functionality!

1. Fork this repo
2. Create a new branch
3. Make changes and test
4. Commit with a clear message
5. Push to your fork
6. Open a pull request 🚀

## 🧾 License

This project is licensed under the MIT License. See the [LICENSE](license) file for details.

## 👨‍💻 Developed By

Surya Prakash M | Surya Prabharan M | Sunil S

# Happy chatting with FANG! 💬🌐🗣️

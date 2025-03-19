# ReliefNow-Disaster Relief & Emergency Assistance Platform

## 📌 Project Overview
ReliefNow is a web-based platform designed to assist communities affected by disasters by providing real-time alerts, emergency response coordination, and resource distribution. The platform enables individuals in disaster-hit areas to seek help, while volunteers, NGOs, and authorities can efficiently allocate aid and support.

## 🛠️ Tech Stack
- **Frontend:** Vite + React, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Firebase
- **Package Manager:** npm

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/MohitMahara/ReliefNow.git
cd ReliefNow
```

### 2️⃣ Backend Setup
```sh
cd Server
npm install  # Install dependencies
npm run Server    # Run the backend server
```

### 3️⃣ Frontend Setup
```sh
cd Client
npm install  # Install dependencies
npm run dev    # Run the frontend server
```

## ⚙️ Environment Variables

Create a `.env` file in the root of the `client` directory and add:
```
VITE_SERVER_API=your-server-url (eg: http://localhost:8000)

```

Create a `.env` file in the root of the `server` directory and add:
```
MONGO_URL=your-mongodb-url
JWT_SECRET=your-secret-key
PORT=8000
```
## Running the Project
- Start the backend: npm run server (in /Server folder)
- Start the frontend: npm run dev (in /Client folder)
- Open http://localhost:5173 in your browser

## 🤝 Contribution

Feel free to fork the repo and submit pull requests!

## 📜 License

This project is licensed under the MIT License.


##
Made with ❤️ by Mohit Mahara and Anil Sharma

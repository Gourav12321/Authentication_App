<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authentication App README</title>
</head>
<body>

<h1>Authentication App 🚀</h1>

<h2>Overview</h2>
<p>Welcome to my secure authentication application, built using the MERN stack (MongoDB, Express.js, React, Node.js) and JWT for robust authentication. This project includes user registration and login, password hashing, session management, and Google OAuth integration.</p>
<a href="https://authentication-app-jlsh.onrender.com/">https://authentication-app-jlsh.onrender.com/</a>
<h2>Features</h2>
<ul>
    <li>🔒 Secure User Authentication with hashed passwords</li>
    <li>📧 User Sign-Up and Login</li>
    <li>🔑 JSON Web Tokens (JWT) for session management</li>
    <li>👤 Google OAuth for third-party login</li>
    <li>🛠️ Built using modern web technologies: MongoDB, Express.js, React, Node.js</li>
</ul>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
    <li>Node.js</li>
    <li>MongoDB</li>
    <li>A Google Cloud Platform project for OAuth</li>
</ul>

<h3>Installation</h3>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/Gourav12321/Authentication_App.git</code></pre>
    </li>
    <li>Install dependencies:
        <pre><code>npm install
cd client
npm install
cd ..</code></pre>
    </li>
    <li>Create a <code>.env</code> file in the root directory with the following environment variables:
        <pre><code>MONGO=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
VITE_FIREBASE_ID=your_vite_firebase_id
</code></pre>
    </li>
    <li>Run the development server:
        <pre><code>npm run dev</code></pre>
    </li>
</ol>

<h3>Running the Client</h3>
<p>In a separate terminal window, navigate to the <code>client</code> directory and start the React development server:</p>
<pre><code>cd client
npm start</code></pre>

<h2>Usage</h2>
<ul>
    <li>Navigate to <code>http://localhost:5173</code> to access the application.</li>
    <li>Register a new user or log in with an existing account.</li>
    <li>Use Google OAuth for third-party login.</li>
</ul>

<h2>Project Structure</h2>
<pre><code>authentication-app/
│
├── client/                  # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
│
├── models/                  # MongoDB models
│   └── User.js
│
├── routes/                  # Express routes
│   └── auth.js
│
├── controllers/             # Route controllers
│   └── authController.js
│
├── middleware/              # Custom middleware
│   └── authMiddleware.js
│
├── .env                     # Environment variables
├── server.js                # Express server
├── package.json
└── README.md</code></pre>


<h2>Contributing</h2>
<p>Contributions are welcome! Please open an issue or submit a pull request.</p>

<h2>License</h2>
<p>This project is licensed under the MIT License.</p>

<h2>Acknowledgements</h2>
<p>Thanks to all the open-source contributors and mentors who have guided me!</p>

<h2>Contact</h2>
<ul>
    <li><a href="https://www.linkedin.com/in/gourav-maurya-1b516a303/">Your LinkedIn</a></li>
    <li><a href="https://github.com/Gourav12321/Gourav12321">Your GitHub</a></li>
</ul>

</body>
</html>

Real-Time Chat Application (MERN Stack)
*Project Overview
This project is a Real-Time Chat Application developed using the MERN stack that enables users to communicate instantly through chat rooms. It supports user authentication, room-based conversations, and real-time message delivery using WebSockets. All messages and user data are persistently stored in the database.
The application demonstrates real-world use cases similar to platforms like WhatsApp, Slack, and Microsoft Teams.

*Key Features
User Registration and Login (Authentication)
Real-time messaging using WebSockets (Socket.IO)
Creation of chat rooms
Join and communicate within chat rooms
Persistent message storage (Chat history)
Secure backend APIs
Responsive and scalable backend architecture

*Technology Stack

Backend

Node.js

Express.js

MongoDB

Mongoose

Socket.IO

JSON Web Tokens (JWT)

Frontend

React.js (UI only, not focused on design)

*Project Structure
chat-application/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   ├── package.json
│
└── README.md

 Setup Instructions (Local System)
Prerequisites

Make sure the following are installed:

Node.js (v18 or above)

MongoDB (Local or Atlas)

npm

Git

Backend Setup

Open terminal and navigate to backend folder:

cd backend
npm install
Start MongoDB service and then run:
node server.js
Backend will run on:
http://localhost:5000

*Frontend Setup
Open a new terminal:

cd frontend
npm install
npm start


Frontend will run on:

http://localhost:3000

 Authentication Flow

Users must register with a unique email

Login generates a JWT token

Token is used to access protected routes

Duplicate user registration is restricted

Real-Time Communication

Socket.IO is used for real-time messaging

Users join specific rooms

Messages are instantly broadcast to all users in the same room

Messages are stored in MongoDB for future access

 Testing Instructions

Open the app in two different browsers (or one normal + one incognito)

Login with different user credentials

Join the same room

Send messages

Messages appear instantly in both browsers

 Screenshots Included

Login Page

Register Page

Chat Room Creation

Real-Time Chat Between Users

(Screenshots attached in submission email)

Real-World Relevance

This application is inspired by real-time collaboration tools such as:
WhatsApp
Slack
Microsoft Team
It demonstrates how real-time communication systems are built using modern web technologies.

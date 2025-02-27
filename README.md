Blog App using Node.js and MongoDB

Overview

This is a simple Blog Application built with Node.js, Express, MongoDB, and EJS. Users can create, read, and delete blog posts. The application follows an MVC (Model-View-Controller) architecture and uses Mongoose as the ODM to interact with MongoDB.

Features

Create new blog posts 📝

View all blogs 📄

View details of a single blog 🔍

Delete blog posts ❌

Uses MongoDB for data storage 🗄️

EJS templating for dynamic views 🎨

Express.js for handling routes 🚀

Morgan for logging HTTP requests 📊

Technologies Used

Node.js - JavaScript runtime

Express.js - Web framework

MongoDB - NoSQL database

Mongoose - ODM for MongoDB

EJS - Template engine

Morgan - Logger middleware

Installation

1. Clone the repository

git clone https://github.com/your-repo/blog-app.git
cd blog-app

2. Install dependencies

npm install

3. Set up MongoDB connection

Replace <your_mongodb_uri> in server.js with your MongoDB connection string.

4. Start the server

npm start

Server runs on http://localhost:3000

Folder Structure

blog-app/
│── public/                     # Static assets
│── views/                      # EJS templates
│── models/                     # Mongoose schemas
│── controllers/                # Controller functions
│── routes/                     # Express routes
│── app.js                      # Main server file
│── package.json                # Dependencies
│── .env                        # Environment variables

API Routes

1. Blog Routes

Method

Route

Description

GET

/blogs

Fetch all blogs

GET

/blogs/:id

Fetch a single blog

GET

/blogs/create

Render form to create a new blog

POST

/blogs

Create a new blog

POST

/blogs/delete/:id

Delete a blog
# User Registration App

This is a simple full-stack web application built using **React** for the frontend and **json-server** for the backend. The app allows users to register, view, edit, and delete user information, including their name, email, and date of birth. The data is stored in a local JSON database.

## Features

- **User Registration**: Users can add new users with their name, email, and date of birth.
- **Edit User**: Users can edit existing user information.
- **Delete User**: Users can delete a user from the system.
- **Responsive Design**: The app is mobile-responsive and works well on smaller screens.

## Tech Stack

- **Frontend**: React, Vite
- **Backend**: json-server
- **Styling**: CSS

## Project Structure

```plaintext
user-registration-app/
├── backend/                            # Backend directory
│   ├── node_modules/                   # Installed backend dependencies
│   ├── db.json                         # Sample user data for json-server
│   ├── package-lock.json               # Lock file for backend dependencies
│   ├── package.json                    # Backend dependencies (json-server)
│   └── server.js                       # Express server setup (optional)
├── frontend/                           # Frontend directory
│   ├── node_modules/                   # Installed frontend dependencies
│   ├── public/                         # Public assets like images, favicon, index.html
│   │   ├── index.html                  # Main HTML file
│   │   └── favicon.ico                 # Favicon (optional)
│   ├── src/                            # Source code for the React app
│   │   ├── components/                 # React components
│   │   │   ├── UserForm.css            # Styles for the UserForm component
│   │   │   └── UserForm.jsx            # Form to add or edit a user
│   │   │   ├── UserList.css            # Styles for the UserList component
│   │   │   └── UserList.jsx            # Component to display a list of users
│   │   ├── App.css                     # General App styles
│   │   ├── App.jsx                     # Main app component
│   │   ├── index.css                   # Global styles (font, layout, etc.)
│   │   ├── main.jsx                    # Entry point for the React app
│   ├── vite.config.js                  # Vite configuration file for the frontend
│   ├── package-lock.json               # Lock file for frontend dependencies
│   └── package.json                    # Frontend dependencies (React, Vite, etc.)
├── .gitignore                          # Git ignore file
└── README.md                           # Project documentation and setup guide
```

# Backend and Frontend Setup

## Backend Setup
The backend uses json-server, a simple tool to set up a RESTful API with a JSON file as the database.

### 1. Install Backend Dependencies
Navigate to the backend directory and run the following command to install dependencies:

```bash
cd backend
npm init --yes
npm i --save json-server@0   
```
### 2. Start the Backend Server
Start the json-server with the following command:
```bash
npm start
```
This will start the server on http://localhost:3006, and the backend API will be available to handle user data.

## Frontend Setup
The frontend is built using React and Vite.

### 1. Install Frontend Dependencies
Navigate to the frontend directory and install the dependencies using npm:
```bash
cd frontend
npm install
```

### 2. Start the Frontend Server
Run the following command to start the frontend development server:
```bash
npm run dev
```
This will start the React app at http://localhost:5173 by default.

### How to Use
- Add a New User: Fill out the form with the user’s name, email, and date of birth, then click "Add" to submit the form.
- Edit User: Click the "Edit" button next to any user to update their information.
- Delete User: Click the "Delete" button next to any user to remove them from the list.

### Technologies Used
- React: For building the user interface.
- Vite: A fast and modern build tool for the frontend.
- json-server: For creating a quick backend API with a local JSON file as the database.
- Axios: For making HTTP requests to the backend API.

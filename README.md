# Vibely Chat

Vibely Chat is a real-time chat platform with a modern and engaging user interface. Built with the **MERN stack** (MongoDB, Express, React.js, Node.js), it provides a seamless communication experience for users.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features
- Real-time messaging using WebSockets
- User authentication (Login/Signup)
- Private and group chat support
- Responsive design for both mobile and desktop

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v12.x or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Steps to Install

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/vibely-chat.git
    cd vibely-chat
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory of the project and add the following variables:

    ```bash
    REACT_APP_API_URL=<your_api_url>
    REACT_APP_SOCKET_URL=<your_socket_url>
    ```

4. Start the development server:

    ```bash
    npm start
    ```

    The app will run locally at `http://localhost:4000`.

## Usage

After installation, you can access the app locally by visiting `http://localhost:4000` in your web browser. Create an account, log in, and start chatting with other users.

## Technologies Used

### Frontend:
- **React.js** - for building the user interface
- **Socket.io** - for real-time communication
- **Tailwind CSS** - for styling and responsive design

### Backend:
- **Node.js** - for server-side logic
- **Express.js** - for building the REST API
- **MongoDB** - for storing user data and chat history

### Other Tools:
- **WebSockets** - for handling real-time messaging
- **JWT (JSON Web Tokens)** - for user authentication and session management

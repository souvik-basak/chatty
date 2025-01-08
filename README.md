---

# Chatty - Full Stack Chat Application  

This project is a **Full Stack Chat Application** built with modern web technologies to support real-time chatting. It has a **React.js frontend** and an **Express.js backend**, with **Socket.IO** for real-time communication and **MongoDB** for storing data.  

---

## Key Features  

- **Real-Time Chat**: Chat messages are updated instantly using **Socket.IO**.  
- **User Authentication**: Secure login and registration using **JWT** and hashed passwords with **bcrypt.js**.  
- **File Uploads**: Images can be uploaded and stored through **Cloudinary**.  
- **Responsive Design**: Looks great on all devices, thanks to **Tailwind CSS** and **DaisyUI**.  
- **State Management**: Easy-to-manage frontend state using **Zustand**.  
- **Dynamic Routing**: User-friendly navigation with **React Router**.  
- **Notifications**: Instant notifications using **React Hot Toast**.  

---

## Technologies Used  

### Frontend  
- **React.js**: For building the user interface  
- **React Router**: For navigation between pages  
- **Socket.IO Client**: For real-time chat functionality  
- **Tailwind CSS**: For modern styling  
- **DaisyUI**: For ready-to-use UI components  
- **Zustand**: For managing app state  
- **Axios**: For making API requests  

### Backend  
- **Express.js**: For creating the server  
- **Socket.IO**: For real-time communication  
- **MongoDB**: For storing user and chat data  
- **Mongoose**: For interacting with the database  
- **JWT**: For user authentication  
- **Cloudinary**: For storing uploaded images  
- **Bcrypt.js**: For encrypting passwords  
- **CORS**: For handling cross-origin requests  
- **Dotenv**: For storing environment variables  

---

## File Structure  

### Backend  

```plaintext  
backend/  
├── src/  
│   ├── controllers/     # Handles logic for user and message routes  
│   ├── lib/             # Helper utilities for database, Cloudinary, etc.  
│   ├── middleware/      # Authentication middleware  
│   ├── models/          # Mongoose schemas for users and messages  
│   ├── routes/          # API endpoints for users and messages  
│   ├── seeds/           # Scripts for adding initial data to the database  
│   └── index.js         # Main entry point of the server  
├── .env                 # Environment variables (e.g., database URI, JWT secret)  
├── package.json         # Lists backend dependencies and scripts  
```  

### Frontend  

```plaintext  
frontend/  
├── src/  
│   ├── assets/          # Static files like images  
│   ├── components/      # Reusable pieces like the sidebar and message input  
│   ├── constants/       # App-wide constants  
│   ├── lib/             # Helpers for Axios and utility functions  
│   ├── pages/           # Main pages like Login, Signup, and Chat  
│   ├── store/           # Zustand stores for app state  
│   ├── App.jsx          # The main app file  
│   ├── index.css        # Global CSS styles  
│   └── main.jsx         # Entry point for the React app  
├── package.json         # Lists frontend dependencies and scripts  
```  

---

## How to Run the Project  

### Prerequisites  
- Make sure you have **Node.js** and **MongoDB** installed.  

### Steps to Install and Run  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/souvik-basak/chat-app.git  
   cd chat-app  
   ```  

2. Install dependencies for both the frontend and backend:  
   ```bash  
   cd frontend  
   npm install  
   cd ../backend  
   npm install  
   ```  

3. Set up environment variables:  
   - Create a `.env` file in the `backend` folder.  
   - Add the following details:  
     ```plaintext  
     MONGO_URI=your_mongodb_connection_string  
     JWT_SECRET=your_jwt_secret  
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name  
     CLOUDINARY_API_KEY=your_cloudinary_api_key  
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret  
     ```  

4. Start the application:  
   - To start the backend:  
     ```bash  
     npm run dev  
     ```  
   - To start the frontend:  
     ```bash  
     cd ../frontend  
     npm run dev  
     ```  

---

## Future Improvements  

- **Video Calls**: Add real-time video and audio chat with WebRTC.  
- **Group Chats**: Allow users to create chat groups.  
- **Push Notifications**: Add browser notifications for messages.

---

## Contact  

Developed by **Souvik Basak**  
Feel free to reach out via [souvik.basak2404@gmail.com](mailto:souvik.basak2404@gmail.com).  

---

Enjoy using the chat app! 🎉  

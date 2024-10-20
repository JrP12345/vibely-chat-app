import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./database/connectDB.js";
import cors from "cors";
import userRouter from "./routes/user.js";
import { initSockets } from "./sockets/initSockets.js";
import path from "path";
dotenv.config();
connectDB();

const app = express();
const httpServer = createServer(app);

const _dirname = path.resolve();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/api/user", userRouter);

// sockets initailize
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});
initSockets(io);

app.use(express.static(path.join(_dirname, "/frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));
});
// listening Server
httpServer.listen(process.env.PORT, () => {
  console.log("Server is Running On PORT", process.env.PORT);
});

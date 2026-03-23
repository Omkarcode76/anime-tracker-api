import express from "express";
import connectDB from "./db.js";
import dotenv from "dotenv";
import animeRouter from "./routes/animeRoutes.js";
import userRouter from "./routes/userRoutes.js";
import authMiddleware from "./middleware/userAuthMiddleware.js";
import cors from "cors";

dotenv.config();
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.use("/anime", authMiddleware, animeRouter);
app.use("/user", userRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("failed to start the server", error.message);
    process.exit(1);
  }
};
startServer();

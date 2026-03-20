import { Router } from "express";
import { signUp, Login } from "../controllers/userController.js";
import { validateSignup } from "../middleware/validateUser.js";
const userRouter = Router();

userRouter.post("/signup",validateSignup, signUp);
userRouter.post("/login", Login)

export default userRouter
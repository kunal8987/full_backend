import express from "express";
import { addUser, loginUser } from "../Controller/UserController.js";

const userRouter = express.Router();

// Route to get all users
// userRouter.get("/", userController.getAllUsers);

// Route to get a single user by ID
// userRouter.get("/:id", userController.getUserById);

// Route to create or login a user
userRouter.post("/register", addUser);
userRouter.post("/login", loginUser);

// Route to update an existing user by ID
// userRouter.put("/:id", userController.updateUser);

// Route to delete a user by ID
// userRouter.delete("/:id", userController.deleteUser);

export default userRouter;

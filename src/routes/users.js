import express from "express";
import { usersControllers } from "../controllers/users.js";
// import { usersMiddlewares } from "../middlewares/users.js";

const usersRoutes = express.Router();

usersRoutes.get("/users/findAll", usersControllers.findAll);
usersRoutes.get("/users/login", usersControllers.login);

export { usersRoutes };

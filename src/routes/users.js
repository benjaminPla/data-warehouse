import express from "express";
import { usersControllers } from "../controllers/users.js";
import { usersMiddlewares } from "../middlewares/users.js";

const usersRoutes = express.Router();

usersRoutes.get("/users/findAll", usersControllers.findAll);
usersRoutes.post(
  "/users/login",
  usersMiddlewares.missingUserName,
  usersMiddlewares.missingPassword,
  usersMiddlewares.notFound,
  usersControllers.login
);

export { usersRoutes };

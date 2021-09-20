import express from "express";
import { usersControllers } from "../controllers/users.js";
import { usersMiddlewares } from "../middlewares/users.js";

const usersRoutes = express.Router();

usersRoutes.get("/users/findAll", usersControllers.findAll);
usersRoutes.get("/users/findByName", usersMiddlewares.missingUserName, usersMiddlewares.userNameDoNotFound, usersControllers.findByName);
usersRoutes.post(
  "/users/login",
  usersMiddlewares.missingUserName,
  usersMiddlewares.missingPassword,
  usersMiddlewares.dataDoNotMatch,
  usersControllers.login
);

export { usersRoutes };

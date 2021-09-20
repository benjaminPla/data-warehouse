import express from "express";
import { usersControllers } from "../controllers/users.js";
import { usersMiddlewares } from "../middlewares/users.js";

const usersRoutes = express.Router();

usersRoutes.get("/users/findAll", usersControllers.findAll);
usersRoutes.get("/users/findByName", usersMiddlewares.missingName, usersMiddlewares.nameDoNotFound, usersControllers.findByName);
usersRoutes.post(
  "/users/post",
  usersMiddlewares.missingName,
  usersMiddlewares.missingPassword,
  usersMiddlewares.userAlreadyExists,
  usersControllers.post
);
usersRoutes.delete("/users/delete", usersMiddlewares.missingName, usersMiddlewares.nameDoNotFound, usersControllers.delete);
usersRoutes.post(
  "/users/login",
  usersMiddlewares.missingName,
  usersMiddlewares.missingPassword,
  usersMiddlewares.dataDoNotMatch,
  usersControllers.login
);

export { usersRoutes };

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
usersRoutes.delete("/users/delete", usersMiddlewares.missingId, usersMiddlewares.userNotFound, usersControllers.delete);
usersRoutes.put(
  "/users/put",
  usersMiddlewares.missingName,
  usersMiddlewares.missingNewName,
  usersMiddlewares.missingPassword,
  usersMiddlewares.newNameAlreadyExist,
  usersControllers.put
);
usersRoutes.post(
  "/users/login",
  usersMiddlewares.missingName,
  usersMiddlewares.missingPassword,
  usersMiddlewares.nameDoNotFound,
  usersMiddlewares.dataDoNotMatch,
  usersControllers.login
);

export { usersRoutes };

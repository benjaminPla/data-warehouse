import express from "express";
import { citiesControllers } from "../controllers/citites.js";
// import { citiesMiddlewares } from "../middlewares/cities.js";

const citiesRoutes = express.Router();

citiesRoutes.get("/cities/findAll", citiesControllers.findAll);
// citiesRoutes.get(
//   "/cities/findByName",
//   citiesMiddlewares.missingName,
//   citiesMiddlewares.notFound,
//   citiesControllers.findByName
// );
// citiesRoutes.post(
//   "/cities/post",
//   citiesMiddlewares.missingName,
//   citiesMiddlewares.nameAlreadyExists,
//   citiesControllers.post
// );
// citiesRoutes.delete(
//   "/cities/delete",
//   citiesMiddlewares.missingName,
//   citiesMiddlewares.notFound,
//   citiesControllers.delete
// );
// citiesRoutes.put(
//   "/cities/put",
//   citiesMiddlewares.missingName,
//   citiesMiddlewares.missingNewName,
//   citiesMiddlewares.notFound,
//   citiesControllers.put
// );

export { citiesRoutes };

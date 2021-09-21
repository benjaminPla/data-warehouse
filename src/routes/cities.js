import express from "express";
import { citiesControllers } from "../controllers/cities.js";
import { citiesMiddlewares } from "../middlewares/cities.js";

const citiesRoutes = express.Router();

citiesRoutes.get("/cities/findAll", citiesControllers.findAll);
citiesRoutes.get("/cities/findById", citiesMiddlewares.missingId, citiesMiddlewares.cityIdNotFound, citiesControllers.findById);
citiesRoutes.get("/cities/findByName", citiesMiddlewares.missingName, citiesMiddlewares.cityNameNotFound, citiesControllers.findByName);
citiesRoutes.post(
  "/cities/post",
  citiesMiddlewares.missingName,
  citiesMiddlewares.missingCountryId,
  citiesMiddlewares.cityAlreadyExists,
  citiesMiddlewares.countryNotFound,
  citiesControllers.post
);
citiesRoutes.delete("/cities/deleteById", citiesMiddlewares.missingId, citiesMiddlewares.cityIdNotFound, citiesControllers.delete);
citiesRoutes.delete("/cities/deleteByName", citiesMiddlewares.missingName, citiesMiddlewares.cityNameNotFound, citiesControllers.delete);
citiesRoutes.put(
  "/cities/putById",
  citiesMiddlewares.missingId,
  citiesMiddlewares.missingNewName,
  citiesMiddlewares.missingCountryId,
  citiesMiddlewares.cityIdNotFound,
  citiesMiddlewares.countryNotFound,
  citiesMiddlewares.newNameAlreadyExists,
  citiesControllers.put
);
citiesRoutes.put(
  "/cities/putByName",
  citiesMiddlewares.missingName,
  citiesMiddlewares.missingNewName,
  citiesMiddlewares.newNameAlreadyExists,
  citiesMiddlewares.missingCountryId,
  citiesMiddlewares.countryNotFound,
  citiesMiddlewares.cityNameNotFound,
  citiesControllers.put
);

export { citiesRoutes };

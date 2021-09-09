import express from "express";
import { citiesControllers } from "../controllers/cities.js";
import { citiesMiddlewares } from "../middlewares/cities.js";

const citiesRoutes = express.Router();

citiesRoutes.get("/cities/findAll", citiesControllers.findAll);
citiesRoutes.get(
  "/cities/findByName",
  citiesMiddlewares.missingName,
  citiesMiddlewares.cityNotFound,
  citiesControllers.findByName
);
citiesRoutes.post(
  "/cities/post",
  citiesMiddlewares.missingName,
  citiesMiddlewares.missingCountryId,
  citiesMiddlewares.nameAlreadyExists,
  citiesMiddlewares.countryNotFound,
  citiesControllers.post
);
citiesRoutes.delete(
  "/cities/delete",
  citiesMiddlewares.missingName,
  citiesMiddlewares.cityNotFound,
  citiesControllers.delete
);
citiesRoutes.put(
  "/cities/put",
  citiesMiddlewares.missingName,
  citiesMiddlewares.missingNewName,
  citiesMiddlewares.missingCountryId,
  citiesMiddlewares.countryNotFound,
  citiesMiddlewares.cityNotFound,
  citiesControllers.put
);

export { citiesRoutes };
